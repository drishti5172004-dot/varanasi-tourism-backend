const express = require('express');
const Razorpay = require('razorpay');

const router = express.Router();

const razorpay = new Razorpay({
    key_id: 'rzp_test_So7PUwjudmJgqf',
    key_secret: 'r1aS72r1y5DwAv8clBZnY8Wa'
});

router.post('/create-order', async (req, res) => {

    const options = {
        amount: req.body.amount * 100,
        currency: "INR",
        receipt: "receipt_order"
    };

    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;