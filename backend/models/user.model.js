import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // Convert email to lowercase before saving
        trim: true // Remove extra spaces from email
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }, 
    gender:{
         type: String, 
         required: true, 
    }, 
    profilePic: {
        type: String,
        default: ""
    }
}, 
{ timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
