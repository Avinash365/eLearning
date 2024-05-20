import '../../styling/StudentDash.css';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'; 

const currentDate = new Date().toDateString(); 

function DashProfile() {
    return (
        <div>
            <div className="dashProfileSearch">
                <input type="text"></input>
                < NotificationsNoneIcon style={{ color: "#674818", width: 'fit-content', border: '', float: 'right', marginRight: '4rem', marginTop: '1.5rem' }} />
                <p style={{ color: 'black', fontWeight: 'bold', width: 'fit-content', border: '', float: 'right', marginRight: '1rem', marginTop: '1.5rem' }}>Jone deo</p>
                <img src="circle-img" src="https://www.gale.com/binaries/content/gallery/gale-us-en/banners/elearning/gale-presents-udemy-for-business/instructor-yu.jpg" alt="Logo" style={{ width: '50px', height: '50px', borderRadius: '50%', border: 'solid #674818', float: 'right', marginRight: '1rem', marginTop: '1rem' }} />
            </div>
            <div className="dashProfileLogo">
                <p style={{ marginTop: '3rem', color: 'rgba(255, 255, 255, 0.75)' }}>{currentDate}</p>
                <p style={{ fontWeight: '600', fontSize: '20.8438px', marginBottom: '0px' }}>Welcome back, John!</p>
                <p style={{ marginTop: '0px' }}>Always stay updated in your student portal</p>
            </div>
        </div>
    )
}
export default DashProfile; 