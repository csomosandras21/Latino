const express = require("express");
const router = express.Router();
const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
    try {
        const { items } = req.body;
        
        const tomb = [];
        items.forEach(elem => {
            const obj =  {
                    price_data: {
                        currency: "huf",
                        product_data: {
                            name: elem.parfum.nev,
                            images: [elem.parfum.kep]
                        },
                        unit_amount: elem.parfum.ar * 100
                    },
                    quantity: elem.darab
            }
            tomb.push(obj);
        });

        if (items.length === 0) {
            return res.status(400).json({ error: "Hiányzó adatok" });
        }

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            line_items: tomb,
            success_url: "http://localhost:5173/",
            cancel_url: "http://localhost:5173/cart"
        });

        res.status(200).json({ url: session.url });

    } catch (error) {
        console.error("Stripe hiba:", error.message);
        res.status(500).json({ error: "Stripe hiba" });
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