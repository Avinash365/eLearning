import { useState } from "react"; 
import toast from "react-hot-toast"; 
import { useAuthContext } from "../context/AuthContext";  
import { useNavigate } from "react-router-dom";

const useLogin = () => { 
    const navigate = useNavigate(); 
    const [loading, setLoading] = useState(false); 
    const { setAuthUser } = useAuthContext();  // Get the setAuthUser function from the AuthContext

    const login = async ({email, password}) => {  

        console.log({email, password}); 

        const success = handleInputErrors({email, password});  // Validate the inputs
        if (!success) return;  // Exit if validation fails
        
        setLoading(true);  // Set loading state to true

        try {
            const response = await fetch("http://localhost:8000/api/auth/login", {
                method: "POST", 
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify({ email, password }),  // Send the email and password in the request body
            });

            if (!response.ok) { 
                // Handle server errors (e.g., status code 500)
                throw new Error(await response.text());
            }

            const data = await response.json();  // Parse the JSON response

            if (data.error) {
                // Handle application-specific errors
                throw new Error(data.error);
            }

            toast.success("You signed up successfully");  // Show success toast

            // Save user data in local storage
            localStorage.setItem("eLearning", JSON.stringify(data));
            setAuthUser(data);  // Update auth context with user data
            
            navigate(`/${data.email}`);  // Redirect to the user's home page

        } catch (error) {
            toast.error(error.message);  // Show error toast with the error message
        } finally {
            setLoading(false);  // Set loading state to false
        }
    }; 

    return { loading, login };  // Return the loading state and login function
}; 

export default useLogin; 

function handleInputErrors({email, password}) { 
    
    if (!email || !password) { 
        // console.log(password); 
        toast.error("Please fill in all fields");  // Show error toast if fields are empty
        return false;
    }

    return true;  // Return true if inputs are valid
}
