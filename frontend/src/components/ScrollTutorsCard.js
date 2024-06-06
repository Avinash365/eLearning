import Tutors from "./Tutors.js"

import tutorsInfo from "../containers/TutorsCardInfo.js"

function createTutors(tutorsInfo) {
    return (
        <Tutors
            key={tutorsInfo.id}
            name={tutorsInfo.name}
            info={tutorsInfo.info}
            course={tutorsInfo.course}
            rating={tutorsInfo.rating}
            pic={tutorsInfo.pic}
        />
    )
}
function ScrollTutorsCard() {
    return (
        <div className="tutor">
            <div className="tutorTitle">
                <p style={{ textDecoration: 'underline', marginTop: '3rem', fontSize: 'xx-large' }}>Instructed Courses</p>
                <div className="tutorTitle1">
                    <p style={{ maxWidth: '600px', color: 'black' }}>Want someone to instruct you? No worries, here we introduce our CourseMania’s online Tutors  to assist & guide you in your professional  Path</p>
                    <button style={{ color: 'white', backgroundColor: '#674818', padding: '0.5rem', fontSize: "medium", width: '180px', borderRadius: '0.5rem', height: '50px' }}>Find a Tutor</button>
                </div>
                <p style={{ color: '#674818', fontWeight: 'bold', fontSize: 'large', marginTop: '2rem', display: 'block' }}>Meet our Popular Tutor</p>
            </div>
                <div className="scrollTutorsList">
                    {tutorsInfo.map(createTutors)}
                </div>
        </div>

    )
}
export default ScrollTutorsCard; 