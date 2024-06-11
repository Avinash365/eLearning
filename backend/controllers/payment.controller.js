import { instance } from "../server.js";
import crypto from "crypto";

import Payment from "../models/payment.model.js";

export const checkout = async (req, res) => {
    const options = {
        amount: Number(req.body.amount * 100),
        currency: "INR",
    };
    const order = await instance.orders.create(options);
    console.log(order);
    res.status(200).json({
        success: true,
        order,
    });
};

export const paymentVerification = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        // Debugging log
        console.log('Request body:', req.body);

        // Validate request body
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({
                success: false,
                message: 'Missing required payment details',
            });
        }

        const body = `${razorpay_order_id}|${razorpay_payment_id}`;

        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_SECRET_KEY)
            .update(body.toString())
            .digest('hex');

        const isAuthentic = expectedSignature === razorpay_signature;

        // Debugging log
        console.log('Is payment authentic:', isAuthentic);

        if (isAuthentic) {
            // Save payment details to the database
            await Payment.create({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
            });
            return res.redirect(`http://localhost:3000/`);
        } else {
            return res.status(400).json({
                success: false,
                message: 'Invalid payment signature',
            });
        }
    } catch (error) {
        console.error('Payment verification error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};