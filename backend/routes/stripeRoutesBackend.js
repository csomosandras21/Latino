const express = require("express");
const router = express.Router();
const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
    try {
        const { items } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ error: "Hiányzó adatok" });
        }

        const totalPrice = items.reduce((sum, elem) => sum + (parseFloat(elem.parfum.ar) * elem.darab), 0);
        const FREE_SHIPPING_THRESHOLD = 70000; 

        const line_items = items.map(elem => ({
            price_data: {
                currency: "huf",
                product_data: {
                    name: elem.parfum.nev,
                    images: [elem.parfum.kep],
                },
                unit_amount: Math.round(parseFloat(elem.parfum.ar) * 100), 
            },
            quantity: elem.darab
        }));

        let shippingOptions = [];
        
        if (totalPrice >= FREE_SHIPPING_THRESHOLD) {
            shippingOptions = [
                {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: { amount: 0, currency: 'huf' },
                        display_name: 'Belföldi normál (Ingyenes 70.000 Ft felett)',
                    }
                },
                {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: { amount: 0, currency: 'huf' },
                        display_name: 'Belföldi expressz (Ingyenes 70.000 Ft felett)',
                    }
                }
            ];
        } else {
            shippingOptions = [
                { shipping_rate: 'shr_1SrHO98OQQ62ZqRHutxhLymV' }, 
                { shipping_rate: 'shr_1SrHRV8OQQ62ZqRHEjsCbjbw' }  
            ];
        }

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            allow_promotion_codes: true,
            payment_method_types: ["card"], 
            line_items: line_items,
            
            // --- EZ AZ ÚJ RÉSZ A NÉVHEZ ÉS CÍMHEZ ---
            billing_address_collection: "required", 
            custom_text: {
                shipping_address: { message: "Kérjük, pontosan adja meg a szállítási adatokat." },
            },
            // A kártyatulajdonos nevét a Dashboardon is be tudod állítani, 
            // de a kód szintjén a billing_address_collection: "required" 
            // már kényszeríti a név és cím megadását.
            // ---------------------------------------

            shipping_address_collection: {
                allowed_countries: ['HU'], 
            },
            
            shipping_options: shippingOptions,

            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel",
        });

        res.status(200).json({ url: session.url });

    } catch (error) {
        console.error("Stripe hiba:", error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;



// const express = require("express");
// const router = express.Router();
// const Stripe = require("stripe");

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// router.post("/create-checkout-session", async (req, res) => {
//     try {
//         const { items } = req.body;
//         console.log(items);
        

//         if (items.length === 0) {
//             return res.status(400).json({ error: "Hiányzó adatok" });
//         }

//         const session = await stripe.checkout.sessions.create({
//             mode: "payment",
//             payment_method_types: ["card"],
//             line_items: [
//                 {
//                     price_data: {
//                         currency: "huf",
//                         product_data: {
//                             nev: nev
//                         },
//                         unit_amount: ar * 100
//                     },
//                     quantity: 1
//                 }
//             ],
//             success_url: "http://localhost:5173/",
//             cancel_url: "http://localhost:5173/cart"
//         });

//         res.status(200).json({ url: session.url });

//     } catch (error) {
//         console.error("Stripe hiba:", error.message);
//         res.status(500).json({ error: "Stripe hiba" });
//     }
// });

// module.exports = router;