import InstructorCard from './InstructorCard.js';
import InstrctorCardInfo from '../containers/InstructorCardinfo'; 
import { useNavigate } from 'react-router-dom';

import '../styling/InstructorCard.css'

// import { dividerClasses } from '@mui/material';

// id: 1, 
//       name:"Rejash Kumar", 
//       rating:'4.7 Instructor Rating', 
//       review:'333,566 Reviews', 
//       student:'9,999,999 Students', 
//       course:'7 Courses',
//       pic:"https://www.gale.com/binaries/content/gallery/gale-us-en/banners/elearning/gale-presents-udemy-for-business/instructor-yu.jpg",
function createCard(InstrctorCardInfo) {
    return (
        <InstructorCard
            key={InstrctorCardInfo.id}
            name={InstrctorCardInfo.name}
            rating={InstrctorCardInfo.rating}
            review={InstrctorCardInfo.review}
            student={InstrctorCardInfo.student}
            course={InstrctorCardInfo.course}
            pic={InstrctorCardInfo.pic}
        />
    )
}

function InstructorList() { 
    const Navigate = useNavigate(); 
    const handleClick = ()=>{
        Navigate('/signup')
    }; 

    return (
        <div className=''>
            <p style={{color:'#674818', marginLeft:'5.5rem',marginTop:'4rem', fontSize:'xx-large',padding:'0px'}}>Our Instructor</p>
            <hr style={{color:'#674818', marginLeft:'5.5rem', width:'50%', fontSize:'xx-large'}}/>
            <div className='scrollInstructorList'>
                {InstrctorCardInfo.map(createCard)}
            </div> 
            <button onClick={handleClick} style={{ marginLeft:'47%',color: 'white', backgroundColor: '#674818', padding: '0.5rem', fontSize: "medium", width: '180px', borderRadius: '0.5rem', height: '50px' }}>Join As Instructor</button>
        </div>
    );
}
export default InstructorList; 