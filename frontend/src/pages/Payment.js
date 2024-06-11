import { dividerClasses } from '@mui/material';
import '../styling/Payment.css'
import checkoutHandler from '../hooks/Pay.js';
function Payment() {
    return (
        <div className="div">
            <div className="div-2">
                <form className="div-3">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8593bed23f3426fcd7c3d22370f14d6f2f70328e37b16b114a62396e4d76d43c?"
                        className="img"
                    />
                    <div className="div-4">
                        Enter your mobile money number and provider to start the payment
                    </div>
                    <input type='number' className="div-5" placeholder='Mobile Number'></input>
                    <input type='email' className="div-6" placeholder='Email'></input>
                    <div className="div-7">
                        <input type='text' className="div-8" placeholder='Amount'></input>
                    </div>
                    {/* eslint-disable-next-line no-undef */}
                    <button className="div-9" onClick={() => checkoutHandler(500)}>Confirm</button>
                </form>
            </div>
        </div>
    );
}
export default Payment;