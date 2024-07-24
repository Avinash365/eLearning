import '../styling/CourseDiscription.css'
import { useNavigate } from 'react-router-dom';
import CourseCurriculumBox from './CoursesCurriculumBox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { useAuthContext } from '../context/AuthContext.jsx';
import toast from 'react-hot-toast';


function CourseDiscription(Props) {

    const { authUser } = useAuthContext();
    console.log(authUser)
    let displayEdit = authUser.gender === 'student' ? "none" : "";
    console.log(displayEdit);

    const lession = Props.lessons;
    const navigate = useNavigate();

    function setCourseCurriculumBox(lession, index) {
        return (
            <CourseCurriculumBox
                key={lession.id}
                titleDiscriptions={lession.title}
                lessionNo={index + 1}
            />
        )
    }
    function viewCourse() {
        // navigate(`/course-details/${courseId}`);
        navigate(`/course-details/${Props.id}`, {
            state: { Props }
        });
    }

    const deleteCourse = async () => {
        const warningMessage = "Are you sure you want to delete this course? This action cannot be undone.";

        if (window.confirm(warningMessage)) {
            try {
                const response = await fetch("http://localhost:8000/api/course/delete_course", {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ _id: Props.id }), // Ensure the body is correctly formatted
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
        <div className='courseDiscription'>
            <h2 style={{ color: '#674818' }}>{Props.courseName}</h2>
            <p style={{ color: '#59595A' }}>{Props.courseDiscription}
                <button
                    onClick={viewCourse}
                    style={{ width: '100px', fontSize: 'small', color: 'white', padding: '0.5rem', borderRadius: '5px', float: 'right', marginRight: '0px' }}>View Course</button></p>

            <img src='https://keeplearningeducation.com.au/wp-content/uploads/2021/12/communication-courses-Best.jpg' style={{ marginLeft: '0px', }} />
            <img src='https://keeplearningeducation.com.au/wp-content/uploads/2021/12/communication-courses-Best.jpg' />
            <img src='https://keeplearningeducation.com.au/wp-content/uploads/2021/12/communication-courses-Best.jpg' />
            <img src='https://keeplearningeducation.com.au/wp-content/uploads/2021/12/communication-courses-Best.jpg' />


            <div style={{ display: 'flex', gap: '1.8rem', border: '', width: '' }}>
                <p style={{ color: '#59595A', height: '40px', backgroundColor: 'whitesmoke', fontSize: 'large', padding: '0 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', border: 'solid whitesmoke' }}>
                    {Props.timeTakenToComplete}
                </p>
                <p style={{ color: '#59595A', height: '40px', backgroundColor: 'whitesmoke', fontSize: 'large', padding: '0 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', border: 'solid whitesmoke' }}>
                    {Props.level}
                </p>
                <p style={{ border: '', color: 'black', width: 'fit-content', marginLeft: 'auto' }}>
                    {Props.name}
                </p>
            </div>


            <div className='content' >
                <h3 style={{ color: '#674818', width: '100%', margin: '0px', height: '10px', border: '', }}>Curriculum</h3>
                {lession.slice(0, Math.min(lession.length, 5)).map(setCourseCurriculumBox)}
            </div>
            <DeleteIcon className="editCourse" onClick={deleteCourse} style={{ display: displayEdit }} />
            <EditIcon className="editCourse" style={{ display: displayEdit }} />
        </div>
    )
}
export default CourseDiscription; 