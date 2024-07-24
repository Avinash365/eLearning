// Import necessary modules
import connectToMongoDB from "./db/connectToMongoDB.js";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import Razorpay from "razorpay";

import authRoutes from "./routes/auth.routes.js"; // Import authentication routes 
import courseRoutes from './routes/course.routes.js'; // Impor course routes
import paymentRoutes from './routes/payment.routes.js';

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 8000; // Define the port to run the server
const app = express(); // Create an instance of Express

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_ID_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
});

// Middleware to parse JSON bodies and cookies
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookies

app.use(cors()); // Enable CORS for all routes

// Mount the authRoutes middleware at "/api/auth"
app.use("/api/auth", authRoutes); 
app.use("/api/course", courseRoutes); 
app.use("/api/payment",paymentRoutes);

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello, World!'); // Send a simple response
});

// Start the server and connect to MongoDB
app.listen(PORT, () => {
    connectToMongoDB(); // Connect to MongoDB
    console.log(`Server running on http://localhost:${PORT}`); // Log server start
});
