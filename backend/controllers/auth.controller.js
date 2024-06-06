import User from '../models/user.model.js';
import bcrypt from "bcryptjs";

import generateTokenAndSetCookie from '../utils/generateJWT.js';

// auth.controller.js
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;  

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Invalid email" });
        }
        // Compare passwords
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid password" });
        }
        generateTokenAndSetCookie(user._id, res);
        // Password is correct, send user data in response
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            profilePic: user.profilePic
        });  
        console.log('Login successful'); 
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }  
};

export const signup = async (req, res) => { 
    console.log(req.body); 
    try {
       
        let { name, email, password, confirmPassword, gender } = req.body;

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) { 
            return res.status(400).json({ error: "User already exists" });
        }
        console.log(req.body);

        // Generate profile picture URL
        const profilePic = `https://avatar.iran.liara.run/public/boy?email=${email}`;

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user instance
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            gender,
            profilePic

        });
        
        // Generate JWT token here 
        generateTokenAndSetCookie(newUser._id, res); 
        
        // Save new user to the database
        await newUser.save();

        // Respond with success message and user data
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            gender:newUser.gender,
            profilePic: newUser.profilePic
        }); 
        console.log("signup sucessfully") 

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const logout = (req, res) => {
    console.log('yeah it hit correct endPoint');

    try {
        // Clear the JWT cookie
        res.cookie("jwt", "", { maxAge: 0 });

        // Send the success response
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log({ message: "Error in logout process" });

        // Send the error response
        res.status(500).json({ error: error.message });
    }
};
