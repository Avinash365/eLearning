import '../styling/CourseDiscription.css'

import { useNavigate } from 'react-router-dom';
import CourseCurriculumBox from './CoursesCurriculumBox';  


function CourseDiscription(Props) {  
   console.log(Props.id); 

   const lession = Props.lessons;  
   const navigate = useNavigate();

   function setCourseCurriculumBox(lession, index){
        return(
            <CourseCurriculumBox 
                key={lession.id}
                titleDiscriptions={lession.title}
                lessionNo = {index+1}
            />
        )
   } 
   function viewCourse() { 
    // navigate(`/course-details/${courseId}`);
    navigate(`/course-details/${Props.id}`, {
      state: { Props }
    });
  }

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
            
            <div style={{display:'flex', gap:'1.8rem '}}>
                <p style={{ color: '#59595A', width: 'fit-content', height: '40px', backgroundColor: 'whitesmoke', fontSize: 'large', padding: '', alignItems: 'center', justifyContent: 'center', paddingLeft: '1rem',paddingRight:'1rem',borderRadius:'4px', border:'solid whitesmoke' }}> {Props.timeTakenToComplete}week</p>
                <p style={{ color: '#59595A', width: 'fit-content', height: '40px', backgroundColor: 'whitesmoke', fontSize: 'large', padding: '', alignItems: 'center', justifyContent: 'center', paddingLeft: '1rem', paddingRight:'1rem',borderRadius:'4px', border:'solid whitesmoke' }}> Beginner</p>
                <p style={{border:'', color:'black', width:'', paddingLeft:'55rem'}}>By John Smith</p>
            </div>

            <div className='content' >
                <h3 style={{ color: '#674818', width: '100%', margin: '0px', height: '10px', border: '', }}>Curriculum</h3>
                {lession.slice(0, Math.min(lession.length, 5)).map(setCourseCurriculumBox)}
            </div>
        </div>
    )
}
export default CourseDiscription; 