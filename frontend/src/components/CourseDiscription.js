import '../styling/CourseDiscription.css'

import CourseCurriculumBox from './CoursesCurriculumBox';

function CourseDiscription() {
    return (
        <div className='courseDiscription'>
            <h2 style={{ color: '#674818' }}>Web Design Fundamentals</h2>
            <p style={{ color: '#59595A' }}>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.<button style={{ width: '100px', fontSize: 'small', color: 'white', padding: '0.5rem', borderRadius: '5px', float: 'right', marginRight: '0px' }}>View Course</button></p>
            <img src='https://keeplearningeducation.com.au/wp-content/uploads/2021/12/communication-courses-Best.jpg' style={{ marginLeft: '0px', }} />
            <img src='https://keeplearningeducation.com.au/wp-content/uploads/2021/12/communication-courses-Best.jpg' />
            <img src='https://keeplearningeducation.com.au/wp-content/uploads/2021/12/communication-courses-Best.jpg' />
            <img src='https://keeplearningeducation.com.au/wp-content/uploads/2021/12/communication-courses-Best.jpg' />
            <div style={{display:'flex', gap:'1.8rem '}}>
                <p style={{ color: '#59595A', width: 'fit-content', height: '40px', backgroundColor: 'whitesmoke', fontSize: 'large', padding: '', alignItems: 'center', justifyContent: 'center', paddingLeft: '1rem',paddingRight:'1rem',borderRadius:'4px', border:'solid whitesmoke' }}> 4week</p>
                <p style={{ color: '#59595A', width: 'fit-content', height: '40px', backgroundColor: 'whitesmoke', fontSize: 'large', padding: '', alignItems: 'center', justifyContent: 'center', paddingLeft: '1rem', paddingRight:'1rem',borderRadius:'4px', border:'solid whitesmoke' }}> Beginner</p>
                <p style={{border:'', color:'black', width:'', paddingLeft:'55rem'}}>By John Smith</p>
            </div>

            <div className='content' >
                <h3 style={{ color: '#674818', width: '100%', margin: '0px', height: '10px', border: '', }}>Curriculum</h3>
                <CourseCurriculumBox />
                <CourseCurriculumBox />
                <CourseCurriculumBox />
                <CourseCurriculumBox />
                <CourseCurriculumBox />
            </div>
        </div>
    )
}
export default CourseDiscription; 