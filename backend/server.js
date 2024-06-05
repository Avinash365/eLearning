// Import necessary modules
import connectToMongoDB from "./db/connectToMongoDB.js";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"; // Import authentication routes 
import courseRoutes from './routes/course.routes.js'; // Impor course routes

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 8000; // Define the port to run the server
const app = express(); // Create an instance of Express

// Middleware to parse JSON bodies and cookies
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookies

app.use(cors()); // Enable CORS for all routes

// Mount the authRoutes middleware at "/api/auth"
app.use("/api/auth", authRoutes); 
app.use("/api", courseRoutes); 

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello, World!'); // Send a simple response
});

// Start the server and connect to MongoDB
app.listen(PORT, () => {
    connectToMongoDB(); // Connect to MongoDB
    console.log(`Server running on http://localhost:${PORT}`); // Log server start
});
