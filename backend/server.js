import connectToMongoDB from "./db/connectToMongoDB.js";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 

import authRoutes from "./routes/auth.routes.js";



const PORT = process.env.PORT || 8000;


const app = express();
app.use(cors()); // Enable CORS for all routes
// Load environment variables from .env file
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the authRoutes middleware at "/api/auth"
app.use("/api/auth", authRoutes)

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server Running on http://localhost:${PORT}`)
}); 