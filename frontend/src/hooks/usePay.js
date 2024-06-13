// import useRazorpay from "react-razorpay";


const usePay = () => {

    // const [Razorpay] = useRazorpay();

    const checkoutHandler = async (amount, email, mobileNumber) => {

        try {
            const response = await fetch('http://localhost:8000/api/payment/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: amount.toString(),
                })
            });
            const data = await response.json();
            const { id } = data.order;

            console.log(id);

            const options = {
                key:"rzp_test_hww22vWzarsHeG",
                amount: "50000",
                currency: "INR",
                name: "learnify",
                description: "Tutorial of RazorPay",
                image: "/static/icon1.png",
                order_id: id,
                callback_url: "http://localhost:8000/api/payment/paymentverification",
                prefill: {
                    name: "Avinash Kumar jha",
                    email: "avinashjha2023.25@gmail.com",
                    contact: "9113464628"
                },
                notes: {
                    "address": "Razorpay Corporate Office"
                },
                theme: {
                    "color": "#674818"
                }
            };
            const razor = new window.Razorpay(options);
            razor.open();


        } catch (error) {
            console.error('Error in checkoutHandler:', error);
            // Handle errors appropriately here
        }
    };
    return { checkoutHandler };
};

export default usePay;