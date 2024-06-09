

import '../styling/StudentDash.css'
import Footer from "./Footer.js";
import InstructorCard from "./InstructorCard.js";

import Dashboard from "./Student/DashBoard.js";
import DashProfile from "./Student/DashProfile.js"; 
import CoursesBox from "./Student/CoursesBox.js"; 
import Notices  from "./Student/Notices.js";

import { useAuthContext } from '../context/AuthContext.jsx';
import CourseFrom from './CourseFrom.jsx';



function StudentDash() { 

    const { authUser } = useAuthContext();  

    return (
        <div>
            <div className="dash"> 
            <CourseFrom />
                <Dashboard/>
                <div className="dashProfile">
                    <DashProfile/>
                    <div className="dashProfileInfo">
                        <div>
                            <InstructorCard
                                name={authUser.name}
                                pic='https://th.bing.com/th/id/OIP.WpkpJ3s0SJfNTzpOEy13SgAAAA?w=312&h=334&rs=1&pid=ImgDetMain'
                                rating='4.7 Instructor Rating'
                                review='333,566 Reviews'
                                student='9,999,999 Students'
                                course='Courses' 
                            />
                        </div>
                        <div className="aboutMe">
                            <div style={{ display: 'flex', gap: '1rem' }} className="aboutMe1">
                                <p style={{ color: '#674818', marginLeft: '1.5rem', textDecoration: 'underline', fontSize: 'x-large', fontWeight: 'bold' }}>About Me</p> <button style={{ marginLeft: '11rem' }}>Edit</button> <button>Save</button>
                            </div>
                            <textarea type="text" placeholder="My name is Richard. I have eight years of experience enhancing and executing company marketing strategies. With a bachelor's in marketing, I've helped my company increase revenues by $1.3 million over three years. My professional experience can help me design unique marketing strategies that align with your company's values, customer base and overall mission.">
                            </textarea>
                        </div>
                    </div>
                    <div className="dashProfileCourse">
                        <CoursesBox/> 
                        <Notices/>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}
export default StudentDash; 
