import React from 'react'
import Razorpay from 'razorpay';
import axios from "axios";



   
    const checkoutHandler = async (amount) => {
        console.log("hello",amount);
        const key = process.env.RAZORPAY_ID_KEY;

        const { data: { order } } = await axios.post("http://localhost:8000/api/payment/checkout", {
            amount
        })
         console.log(amount);
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "6 Pack Programmer",
            description: "Tutorial of RazorPay",
            image: "https://avatars.githubusercontent.com/u/25058652?v=4",
            order_id: order.id,
            callback_url: "http://localhost:8000/api/payment/paymentverification",
            prefill: {
                name: "Anoushka Mishra",
                email: "anoushka.mishra@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        console.log("before");
        razor.open();
        console.log("after");
    }

   


export default checkoutHandler;