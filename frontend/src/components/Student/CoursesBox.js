import '../../styling/StudentDash.css' 
import CourseBox from './CourseBox.js'; 


import AddCircleIcon from '@mui/icons-material/AddCircle'; 

function CoursesBox() {
    return (
        <div className="course">
            <div className="allcourse"><p style={{ color: 'black', width: 'fit-content', fontSize: '30px' }}>Courses</p> <button style={{
                width: '83.38px',
                height: '21.82px',
                background: '#674818',
                borderRadius: '16.2842px',
                color: 'white'

            }}>See all</button></div>
            <CourseBox />
            <CourseBox />
            <CourseBox />
            {/* <CourseBox /> */}
            <a><AddCircleIcon style={{ color: "#674818", fontSize: '50px', marginLeft: '2rem', marginTop: '2rem' }} /></a>
        </div>
    );
}
export default CoursesBox; 