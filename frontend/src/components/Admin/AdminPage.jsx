


import Footer from "../Footer.js"; 

import Dashboard from "../Student/DashBoard.js"; 
import DashProfile from "../Student/DashProfile.js"; 


import UserManagement from './UserManagement.jsx';
import CourseList from './CourseList.jsx';

//import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

//import { useCourses } from '../context/UserCourseContext';

function AdminDash() {
    return (
        <div>
            <div style={{ display: "flex", marginLeft: "1rem", gap: "1rem" }}>
                <Dashboard />
                <div>
                    <DashProfile />
                    <UserManagement />
                    <CourseList />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default AdminDash;