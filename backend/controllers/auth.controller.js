import User from '../models/user.model.js';
import bcrypt from "bcryptjs";

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

        // Password is correct, send user data in response
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            profilePic: user.profilePic
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    } 
    console.log('Login successful'); 
};

export const signup = async (req, res) => { 
    console.log(req.body); 
    try {
       
        let { name, email, password, confirmPassword } = req.body;

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
            profilePic
        });

        // Save new user to the database
        await newUser.save();

        // Respond with success message and user data
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            profilePic: newUser.profilePic
        }); 
        console.log("signup sucessfully") 

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const logout = (req, res) => {
    // Logic for handling logout
    res.send('Logout successful');
};
