const express = require("express");
const router = express.Router();
const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
    try {
        const { nev, ar } = req.body.items[0].parfum;
        console.log(req.body.items[0].parfum);
        

        if (!nev || !ar) {
            return res.status(400).json({ error: "Hiányzó adatok" });
        }

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "huf",
                        product_data: {
                            nev: nev
                        },
                        unit_amount: ar * 100
                    },
                    quantity: 1
                }
            ],
            success_url: "http://localhost:5173/",
            cancel_url: "http://localhost:5173/cart"
        });

        res.status(200).json({ url: session.success_url });

    } catch (error) {
        console.error("Stripe hiba:", error.message);
        res.status(500).json({ error: "Stripe hiba" });
    }
});

module.exports = router;