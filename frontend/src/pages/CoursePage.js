import SignedNavbar from "../signedPages/SignedNavbar";
import CourseDiscription from "../components/CourseDiscription.js";
import Footer from "../components/Footer";
import { useCourses } from '../context/UserCourseContext.jsx';
import { useAuthContext } from "../context/AuthContext.jsx";

function CoursePage() {
    const { courses = [], loading, error } = useCourses();
    const { authUser } = useAuthContext();

    if (courses.length === 0) {
        let message = "";

        message = authUser.gender === 'student' ? "No Active Enroled Course" : "Upload a course";

        return (
            <div>
                <SignedNavbar />
                <div className="" style={{border:'solid',display:'flex', alignItems:'center', justifyContent:'center', height:'400px'}}>
                    <h1 style={{ color: '#674818', marginTop: '100px', marginBottom: '0', marginLeft: '0', marginRight: '0',}}>{message}</h1>
                </div>
                <Footer />
            </div>
        );
    }

    function setCourseDetails(courses) {
        return (
            <CourseDiscription
                key={courses._id}
                id={courses._id}
                courseName={courses.courseName}
                courseUrl={courses.courseUrl}
                courseDiscription={courses.courseDiscription}
                courseDetails={courses.courseDetails}
                lessons={courses.lessons}
                timeTakenToComplete={courses.timeTakenToComplete}
            />
        );
    }

    console.log(courses);

    return (
        <div>
            <SignedNavbar />
            <div style={{ width: '1270px', height: '200px', marginLeft: '5.5rem', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
                <p style={{ color: "#674818", minWidth: '50%', fontSize: '40px' }}>Online Courses available</p>
                <p style={{ color: '#59595A', minWidth: '50%' }}>
                    Welcome to our online course page, where you can enhance your skills in design and development.
                    Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive
                    knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.
                </p>
            </div>
            <div>
                {courses.map(setCourseDetails)}
            </div>
            <Footer />
        </div>
    );
}

export default CoursePage;
