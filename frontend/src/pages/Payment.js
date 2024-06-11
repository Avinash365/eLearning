import React, { useState } from 'react';
import '../styling/Payment.css';
import usePay from '../hooks/usePay.js';  
import CloseIcon from '@mui/icons-material/Close';


function Payment() {
    const { checkoutHandler } = usePay();
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        document.querySelector('.div-2').classList.remove('visible');
        await checkoutHandler(amount, email, mobileNumber); 
    }; 

    const closeCourseFrom = () => {
        document.querySelector('.div-2').classList.remove('visible');
    }

    return (
            <div className="div-2"> 
                <a onClick={closeCourseFrom}><CloseIcon style={{color:'#674818', margin:'0 0 0 94%'}}/></a>
                <form className="div-3" onSubmit={handleSubmit}>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8593bed23f3426fcd7c3d22370f14d6f2f70328e37b16b114a62396e4d76d43c?"
                        className="img"
                        alt="Payment"
                    />
                    <div className="div-4">
                        Enter your mobile money number and provider to start the payment
                    </div>
                    <input
                        type="number"
                        className="div-5"
                        placeholder="Mobile Number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                    <input
                        type="email"
                        className="div-6"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="div-7">
                        <input 
                            type="text"
                            className="div-8"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)} 
                            style={{border:'solid 1px #674819'}}
                        />
                    </div>
                    <button type="submit" className="div-9">
                        Confirm
                    </button>
                </form>
            </div>
    );
}

export default Payment;
