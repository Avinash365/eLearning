import { useState } from "react"; 
import toast from 'react-hot-toast'; 
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from "../context/AuthContext.jsx";



const useSignup = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    
    
    const signup = async ({ name, email, password, confirmPassword }) => {
        const isValid = handleInputErrors({ name, email, password, confirmPassword });
        if (!isValid) return;

        setLoading(true);
        try {
            const response = await fetch("http://localhost:8000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, confirmPassword }),
            });
    
            if (!response.ok) { 
                // toast.response(error.message);
                throw new Error(await response.text());
            }

            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }

            console.log(data); 

            toast.success("You signed up successfully");
            localStorage.setItem("eLearning", JSON.stringify(data));
            setAuthUser(data); 

            navigate(`/${data.email}`); // Redirect to Home

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default useSignup;

function handleInputErrors({ name, email, password, confirmPassword }) {
    if (!name || !email || !password || !confirmPassword) {
        toast.error('All fields are required');
        return false;
    }
    if (password !== confirmPassword) {
        toast.error('Password and confirm password must be the same');
        return false;
    }
    if (password.length < 8) {
        toast.error('Password length must be more than 8 characters');
        return false;
    }
    return true;
}
