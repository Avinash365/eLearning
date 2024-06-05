import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useCourse = () => {
    const { authUser } = useAuthContext();

    const getCourse = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/course/user_courses?email=${encodeURIComponent(authUser.email)}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                // Handle server errors (e.g., status code 500)
                throw new Error(await response.text());
            }

            const data = await response.json();
            console.log(data);

            if (data.error) {
                throw new Error(data.error);
            }

            toast.success("Courses fetched successfully");
            return data;
        } catch (error) {
            toast.error(error.message || "An error occurred");
            throw error;
        }
    };

    return { getCourse };
};

export default useCourse;
