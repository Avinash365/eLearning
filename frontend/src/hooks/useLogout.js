import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const useLogout = () => { 
    const navigate = useNavigate(); // React Router hook for navigation
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:8000/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });   
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || 'Logout failed');
            } 
            console.log("write user")

            localStorage.removeItem("eLearning");
            setAuthUser(null); 
            navigate('/'); // Redirect to the user's home page
            toast.success("Logged out successfully");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
};

export default useLogout;
