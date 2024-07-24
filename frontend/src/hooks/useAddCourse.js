
import toast from "react-hot-toast";  
import { useAuthContext } from "../context/AuthContext.jsx";  




const useAddCourse = () => { 

    const { authUser } = useAuthContext(); 

    const addCourse = async ({courseName,courseUrl,timeTakenToComplete,courseDiscription,courseDetails,courseLevel,lessons,price})=>{  
        const email = authUser.email;  

        const data = { 
            email, 
            courseName,
            courseUrl, 
            courseLevel,
            courseDiscription,
            courseDetails, 
            lessons, 
            timeTakenToComplete,
            price, 
            authorName:authUser.name,
        };  
        try{
            const response = await fetch("http://localhost:8000/api/course/create_course",{
                method:"POST",  
                headers: { "Content-Type": "application/json" }, 
                body:JSON.stringify(data)
            });   

            if(!response.ok){
                throw new Error(await response.text()); 
            }  

            if (data.error) {
                // Handle application-specific errors
                throw new Error(data.error);
            } 
            toast.success("new Course added successfully"); // Show success toast 
             
            
        }catch(error){
            toast.error(error.message);
        };
        console.log(data); 
    }; 
    return {addCourse}; 
} 
export default useAddCourse; 