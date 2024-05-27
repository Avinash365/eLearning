import jwt from 'jsonwebtoken'; 
import User from '../models/user.model.js';

// Middleware to protect routes and verify user authentication
const protectRoute = async (req, res, next) => { 
    
    try {
        const token = req.cookies.jwt; // Get the token from cookies

        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" }); // Respond if no token is provided
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" }); // Respond if token verification fails
        }
        
        const user = await User.findById(decoded.userId).select("-password"); // Find the user by ID and exclude the password

        if (!user) {
            return res.status(404).json({ error: "User not found" }); // Respond if the user is not found
        }

        req.user = user; // Attach the user object to the request
        next(); // Proceed to the next middleware or route handler
        
    } catch (error) {
        console.log("Error in protectRoute middleware:", error.message);
        res.status(500).json({ error: "Internal server error" }); // Respond with an internal server error
    }
}

export default protectRoute;
