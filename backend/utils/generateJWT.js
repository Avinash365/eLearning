import jwt from "jsonwebtoken"; 

/**
 * Function to generate a JWT token and set it as an HTTP-only cookie
 * @param {string} userId - The ID of the user for whom the token is generated
 * @param {object} res - The response object to set the cookie
 */
const generateTokenAndSetCookie = (userId, res) => {
    // Generate a JWT token with the user ID and secret key, setting it to expire in 15 days
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });

    // Set the generated token as a cookie in the response
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true, // HTTP-only flag to prevent XSS attacks
        sameSite: "strict", // SameSite attribute to prevent CSRF attacks
        secure: process.env.NODE_ENV !== "development", // Secure flag for HTTPS in production
    });
};

export default generateTokenAndSetCookie;
