import '../../styling/StudentDash.css'
import CourseBox from './CourseBox.js';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useAuthContext } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

import CourseFrom from '../CourseFrom.jsx';


function openCourseFrom(){
   document.querySelector('.courseFrom').classList.add('visible'); 
}



function CoursesBox() {

    const navigate = useNavigate();
    const { authUser } = useAuthContext();
  
    const handleClick = () => {
      if (authUser) {
        console.log('yeah', authUser);
        navigate(`/${authUser.email}/course`);
      } else {
        console.error('authUser is not defined');
      }
    };

    return (
        <div className="course"> 
            <div className="allcourse"><p style={{ color: 'black', width: 'fit-content', fontSize: '30px' }}>Courses</p>
             <button 
              onClick={handleClick}
             style={{
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
            <CourseFrom />
            <a onClick={openCourseFrom}><AddCircleIcon style={{ color: "#674818", fontSize: '50px', marginLeft: '2rem', marginTop: '2rem' }} /></a>
        </div>
    );
}
export default CoursesBox; 