import mongoose  from "mongoose"; 

const { Schema } = mongoose; 

// define the Payment Schema  

// razorpay_payment_id: 'pay_OLQqEmqVBK42A2',
//   razorpay_order_id: 'order_OLQq29RijChXMS',
//   razorpay_signature: 'ee7e1500e44421f25aacff1f197efec33f072864083e51371cb046053ed12ce3'

const PaymentSchema = new Schema({
    razorpay_payment_id:{
        type:String, 
        required: true, 
    },  
    razorpay_order_id:{
        type:String, 
        required: true, 
    },
    razorpay_signature:{
        type:String, 
        required: true, 
    }
},{timestamps:true}); 
const Payment = mongoose.model('Payment',PaymentSchema); 
export default Payment; 