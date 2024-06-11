import '../../styling/StudentDash.css';
import { Link } from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useAuthContext } from '../../context/AuthContext.jsx';
import SearchIcon from '@mui/icons-material/Search';

const currentDate = new Date().toDateString();

function DashProfile() {
    const { authUser } = useAuthContext();
    return (
        <div>
            <div className="dashProfileSearch">
                <div className='searchBox'>
                    <div className='searchBox1'>
                        <SearchIcon style={{ color: '#674818', margin: '0 0 0 0' }} /><input type="text"  id='ser' style={{border:'none'}} />
                    </div>
                </div>
                < NotificationsNoneIcon style={{ color: "#674818", width: 'fit-content', border: '', marginRight: '4rem', marginTop: '1.5rem', float: 'right' }} />
                <Link style={{ color: 'black', fontWeight: 'bold', width: 'fit-content', border: '', marginRight: '1rem', marginTop: '1.5rem', textDecoration: 'none', float: 'right' }}>{authUser.name}</Link>
                <img src="https://media.istockphoto.com/vectors/excited-smiley-face-in-graduation-cap-vector-id1137074533?k=6&m=1137074533&s=612x612&w=0&h=a-S02zNx2SYg7CRzGJnIVELoEE7ci0zeCEX0BeKb1ks=" alt="animate-charcter" style={{ width: '50px', height: '50px', borderRadius: '50%', border: 'solid #674818', marginRight: '1rem', marginTop: '1rem', float: 'right' }} />

            </div>
            <div className="dashProfileLogo" style={{ display: 'flex', gap: '3rem' }}>
                <div style={{ marginLeft: '3rem', minWidth: '50%', gap: '4rem' }}>
                    <p style={{ marginTop: '3rem', color: 'rgba(255, 255, 255, 0.75)' }}>{currentDate}</p>
                    <p style={{ fontWeight: '600', fontSize: '20.8438px', marginBottom: '0px' }}>Welcome back,&nbsp;&nbsp;{authUser.name}!</p>
                    <p style={{ marginTop: '0px' }}>Always stay updated in your student portal</p>
                </div>
                <img src="/static/Picture4.png" style={{ marginTop: '1.5rem', border: '' }} />

            </div>
        </div>
    )
}
export default DashProfile; 