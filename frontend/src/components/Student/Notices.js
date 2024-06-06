import '../../styling/StudentDash.css'

import Notice from './Notice';

function Notices() {
    return (
        <div className="dailyNotic">
            <p style={{ textDecoration: 'underline', color: '#674818', fontWeight: 'bold', fontSize: 'x-large', marginLeft: '6rem', marginTop: '3rem', }}>Daily notice</p>
            <Notice
                name="Prelim payment due"
                dis="Sorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Notice
                name="Exam schedule"
                dis="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            />
        </div>
    )
}
export default Notices; 