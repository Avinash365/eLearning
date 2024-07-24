// import useRazorpay from "react-razorpay";

const usePay = () => {

    // const [Razorpay] = useRazorpay();

    const checkoutHandler = async (Props) => {
        console.log(Props); 
        try {
            const response = await fetch('http://localhost:8000/api/payment/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: Props.price.toString(),
                })
            });
            const data = await response.json();
            const { id } = data.order;

            console.log(id);

            const options = {
                key:"rzp_test_BxnMxiPHqiqEo5",
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
                }, 
                handler: async function (response) {
                    try {
                        console.log(response);
                        // Call enroll course API after successful payment
                        const enrollResponse = await fetch('http://localhost:8000/api/course/enrol_course', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                email: Props.email,
                                courseId: Props.id
                            })
                        });
                        const enrollData = await enrollResponse.json();
                        console.log('Enrollment successful:', enrollData);
                        // Handle successful enrollment here (e.g., update UI, notify user)
                    } catch (enrollError) {
                        console.error('Error enrolling in course:', enrollError);
                        // Handle errors in enrolling here
                    }
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