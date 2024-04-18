const express = require('express')
const router = express.Router()
const stripe = require('stripe')(process.env.Stripe_Secret_key)

router.post('/', async (req, res) => {

    const { price } = req.body;
    const amount = parseInt(price * 100);

    try {
        // Create Payment Intent using Stripe
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            payment_method_types: ['card']
        });

        res.json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error('Error creating Payment Intent:', error);
        res.status(500).json({ error: 'Failed to create Payment Intent' });
    }


})

module.exports = router