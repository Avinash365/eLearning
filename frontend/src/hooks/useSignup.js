import { useState } from "react"; 
import toast from 'react-hot-toast'; 
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from "../context/AuthContext.jsx";

// Custom hook for user signup
const useSignup = () => {
    const navigate = useNavigate(); // React Router hook for navigation
    const [loading, setLoading] = useState(false); // State to manage loading state
    const { setAuthUser } = useAuthContext(); // Get the setAuthUser function from AuthContext

    // Function to handle user signup
    const signup = async ({ name, email, password, confirmPassword, gender }) => {
        // Validate input fields
        const isValid = handleInputErrors({ name, email, password, confirmPassword, gender });
        if (!isValid) return;

        setLoading(true); // Set loading state to true
        try {
            // Send signup request to the backend
            const response = await fetch("http://localhost:8000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, confirmPassword, gender }),
            });

            if (!response.ok) { 
                // Handle server errors
                throw new Error(await response.text());
            }

            const data = await response.json(); // Parse the JSON response

            if (data.error) {
                // Handle application-specific errors
                throw new Error(data.error);
            }

            toast.success("You signed up successfully"); // Show success toast

            // Save user data in local storage
            localStorage.setItem("eLearning", JSON.stringify(data));
            setAuthUser(data); // Update auth context with user data
            
            navigate(`/${data.email}`); // Redirect to the user's home page

        } catch (error) {
            toast.error(error.message); // Show error toast
        } finally {
            setLoading(false); // Set loading state to false
        }
    };

    return { loading, signup }; // Return loading state and signup function
};

export default useSignup;

// Function to handle input validation errors
function handleInputErrors({ name, email, password, confirmPassword, gender }) {
    if (!name || !email || !password || !confirmPassword || !gender) {
        toast.error('All fields are required'); // Show error if any field is empty
        return false;
    }
    if (password !== confirmPassword) {
        toast.error('Password and confirm password must be the same'); // Show error if passwords don't match
        return false;
    }
    if (password.length < 8) {
        toast.error('Password length must be more than 8 characters'); // Show error if password is too short
        return false;
    }
    return true; // Return true if all validations pass
}
