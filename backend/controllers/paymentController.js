import { instance } from "../server.js";
import crypto from "crypto";
import Razorpay from "razorpay";
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
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
      console.log(body);
    // const expectedSignature = crypto
    //     .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
    //     .update(body.toString())
    //     .digest("hex");

    const isAuthentic = true;

    if (isAuthentic) {
        // Database comes here

        await Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        });
        console.log("yes");
        res.redirect(
            `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
        );
    } else {
        res.status(400).json({
            success: false,
        });
    }
};