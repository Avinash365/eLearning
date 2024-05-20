
import '../styling/StudentDash.css' 
import '../styling/TeacherDash.css'


import Footer from "./Footer.js";
import Dashboard from "./Student/DashBoard.js";
import DashProfile from "./Student/DashProfile.js"; 
import CoursesBox from "./Student/CoursesBox.js"; 
import Notices  from "./Student/Notices.js"; 

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';



function StudentDash() {
    return (
        <div>
            <div className="dash">
                <Dashboard/>
                <div className="dashProfile">
                    <DashProfile/> 
                    <p style={{color:'black', fontSize:"x-large", marginBottom:'0px', marginTop:'5rem',}}>Finanace</p>
                    <div className="dashProfileInfo">
                        <div className='finanace'>
                            <div className='finanaceBox'>

                            </div> 
                            <div className='finanaceBox'>

                            </div> 
                            <div className='finanaceBox'>

                            </div> 

                        </div> 
                        <div className='courseInstructor'> 
                            <p style={{color:'#674818',marginLeft:'1rem',marginTop:'1rem', textDecoration:'underline'}}>Course Instructor</p>
                            <img src="circle-img" src="https://www.gale.com/binaries/content/gallery/gale-us-en/banners/elearning/gale-presents-udemy-for-business/instructor-yu.jpg" alt="Logo" style={{ width: '50px', height: '50px', borderRadius: '50%', border: 'solid #674818', float: 'left', marginLeft: '1rem', marginTop: '0' }} />
                            <img src="circle-img" src="https://www.gale.com/binaries/content/gallery/gale-us-en/banners/elearning/gale-presents-udemy-for-business/instructor-yu.jpg" alt="Logo" style={{ width: '50px', height: '50px', borderRadius: '50%', border: 'solid #674818', float: 'left', marginLeft: '1rem', marginTop: '0' }} />
                            <img src="circle-img" src="https://www.gale.com/binaries/content/gallery/gale-us-en/banners/elearning/gale-presents-udemy-for-business/instructor-yu.jpg" alt="Logo" style={{ width: '50px', height: '50px', borderRadius: '50%', border: 'solid #674818', float: 'left', marginLeft: '1rem', marginTop: '0' }} />
                            <img src="circle-img" src="https://www.gale.com/binaries/content/gallery/gale-us-en/banners/elearning/gale-presents-udemy-for-business/instructor-yu.jpg" alt="Logo" style={{ width: '50px', height: '50px', borderRadius: '50%', border: 'solid #674818', float: 'left', marginLeft: '1rem', marginTop: '0' }} />
                            <ArrowCircleRightIcon style={{color:'#674818', fontSize:'30px', marginLeft:'0.5rem', marginTop:'1rem', className:"next"}}/>
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