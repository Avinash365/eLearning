import React from 'react';
import './CourseList.css'; 
import { useNavigate } from 'react-router-dom';  
import toast from 'react-hot-toast';



function CourseRow({ courseName, authorName, _id }) { 
   
    
    const navigate = useNavigate();
    
    // Function to view course details
    const viewCourse = async () => {  
        try {
            const response = await fetch(`http://localhost:8000/api/course/one/${_id}`);
            if (!response.ok) {
                throw new Error('Course not found');
            }
            const Props = await response.json();
            console.log(Props);

            // Navigate to the course details page
            navigate(`/course-details/${_id}`, {
                state: { Props }
            });
        } catch (error) {
            console.error('Error fetching course:', error);
            toast.error('Failed to fetch course details');
        }
    };
    
    const deleteCourse = async () => {
        const warningMessage = "Are you sure you want to delete this course? This action cannot be undone.";

        if (window.confirm(warningMessage)) {
            try {
                const response = await fetch("http://localhost:8000/api/course/delete_course", {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ _id: _id }), // Ensure the body is correctly formatted
                });

                if (response.ok) {
                    const result = await response.json();
                    toast.success("Course deleted successfully!");
                    console.log("Course deleted successfully:", result);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000); // Adjust the delay as needed 

                } else {
                    toast.error("Failed to delete the course: " + response.statusText);
                    console.error("Failed to delete the course:", response.statusText);
                    // Optionally handle error logic here
                }
            } catch (error) {
                toast.error("An error occurred while deleting the course.");
                console.error("An error occurred while deleting the course:", error);
                // Optionally handle error logic here
            }
        } else {
            toast("Course deletion was cancelled by the user.");
            console.log("Course deletion was cancelled by the user.");
        }
    };

    return (
       
        <div className="course-row">
            <div className="user-info">{ courseName}</div>
            <div className="user-info">{authorName}</div>
            <div className="user-info">{_id}</div>
            <button className="action-button" onClick={viewCourse}>View</button>
            <button className="action-button">Modify</button>
            <button className="action-button" onClick={deleteCourse}>Delete</button>
        </div>
    );
}

export default CourseRow;