import { dividerClasses } from '@mui/material';
import '../styling/Payment.css'

function Payment() {
    return (
        <div className="div">
            <div className="div-2">
                <div className="div-3">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8593bed23f3426fcd7c3d22370f14d6f2f70328e37b16b114a62396e4d76d43c?"
                        className="img"
                    />
                    <div className="div-4">
                        Enter your mobile money number and provider to start the payment
                    </div>
                    <div className="div-5">Mobile Number</div>
                    <div className="div-6">Email</div>
                    <div className="div-7">
                        <div className="div-8">Amount</div>
                    </div>
                    <div className="div-9">Confirm</div>
                </div>
            </div>
        </div>
    );
}
export default Payment;