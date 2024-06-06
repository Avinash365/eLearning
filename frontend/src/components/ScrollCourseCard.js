import React from 'react';
import '../styling/CourseCard.css'
import courseCardInfo from '../containers/CourseCardInfo.js'
import CourseCard from './CourseCard.js';

function createCard(courseCardInfo) {
    return (
        <CourseCard
            key={courseCardInfo.id}
            name={courseCardInfo.name}
            info={courseCardInfo.info}
            price={courseCardInfo.price}
            rating={courseCardInfo.rating}
            pic={courseCardInfo.pic}
        />
    )
}

const ScrollCourseCard = (Props)=> { 
    // console.log(title);
    return (
        <div className='courseCardBox'>
            <p style={{ color: '#674818', marginLeft: '0px', marginTop: '4rem', marginBottom: '0px', fontSize: 'xx-large', padding: '0px' }}>{Props.title}</p>
            <hr style={{ color: '#674818', marginLeft: '0px', width: '50%', marginTop: '0px', fontSize: 'xx-large' }} />
            <div style={{border:'', width:'fit-content', float:'right', marginRight:'5rem'}}>
                <input type="checkbox" /><label style={{ color: 'black', marginLeft:'.5rem',color:'#674818'}}>Free course</label>
                <input type="checkbox" style={{ marginLeft: '1rem' }} /><label style={{ color: 'black',marginLeft:'.5rem',color:'#674818' }}>Paid Course</label> 
                {/* <button style={{color:'black'}}></button> */}
            </div>
            <div className='scrollCourseCard'>
                {courseCardInfo.map(createCard)}
            </div>
        </div>

    )
}
export default ScrollCourseCard;  

