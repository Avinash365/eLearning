import '../../styling/StudentDash.css';
import { Link } from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useAuthContext } from '../../context/AuthContext.jsx';

const currentDate = new Date().toDateString();

function DashProfile() {
    const { authUser } = useAuthContext();
    return (
        <div>
            <div className="dashProfileSearch">
                <input type="text"></input>
                < NotificationsNoneIcon style={{ color: "#674818", width: 'fit-content', border: '', float: 'right', marginRight: '4rem', marginTop: '1.5rem' }} />
                <Link style={{ color: 'black', fontWeight: 'bold', width: 'fit-content', border: '', float: 'right', marginRight: '1rem', marginTop: '1.5rem', textDecoration: 'none' }}>{authUser.name}</Link>
                <img  src="https://media.istockphoto.com/vectors/excited-smiley-face-in-graduation-cap-vector-id1137074533?k=6&m=1137074533&s=612x612&w=0&h=a-S02zNx2SYg7CRzGJnIVELoEE7ci0zeCEX0BeKb1ks=" alt="animate-charcter" style={{ width: '50px', height: '50px', borderRadius: '50%', border: 'solid #674818', float: 'right', marginRight: '1rem', marginTop: '1rem' }} />
            </div>
            <div className="dashProfileLogo" style={{ display: 'flex', gap:'3rem'}}>
                <div style={{ marginLeft: '3rem', minWidth:'50%', gap:'4rem' }}>
                    <p style={{ marginTop: '3rem', color: 'rgba(255, 255, 255, 0.75)' }}>{currentDate}</p>
                    <p style={{ fontWeight: '600', fontSize: '20.8438px', marginBottom: '0px' }}>Welcome back,&nbsp;&nbsp;{authUser.name}!</p>
                    <p style={{ marginTop: '0px' }}>Always stay updated in your student portal</p>
                </div>
                <img src="/static/Picture4.png" style={{marginTop:'1.5rem', border:''}}/>

            </div>
        </div>
    )
}
export default DashProfile; 