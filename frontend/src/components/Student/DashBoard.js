import '../../styling/StudentDash.css';
import useLogout from '../../hooks/useLogout';
import { Link } from 'react-router-dom';

import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PaymentsIcon from '@mui/icons-material/Payments';
import EditIcon from '@mui/icons-material/Edit';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import LogoutIcon from '@mui/icons-material/Logout'; 
import { useAuthContext } from '../../context/AuthContext';  



function Dashboard() {  

    const {authUser} = useAuthContext(); 
    const { loading, logout } = useLogout();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logout();
            console.log('User logged out successfully');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }

    return (
        <div className="dashBoard"> 
            <img src='/static/icon1.png' style={{
                width:'100px',
                height:'100px',
                marginLeft:'4.5rem', 
                marginTop:'4rem'
            }}/>
            <p style={{ marginTop: '4rem' }}>
                <Link to=" " style={{display:'flex', gap:'1rem',alignItems:'center'}}><SpaceDashboardIcon/> Dashboard</Link>
            </p>
            <p>
                <Link to=" " style={{display:'flex', gap:'1rem',alignItems:'center'}}><PaymentsIcon /> Payment Info</Link>
            </p>
            <p>
                <Link to=" " style={{display:'flex', gap:'1rem',alignItems:'center'}}><EditIcon /> Registration</Link>
            </p>
            <p>
                <Link to={`/${authUser.email}/course`} style={{display:'flex', gap:'1rem',alignItems:'center'}}><CollectionsBookmarkIcon /> Courses</Link>
            </p>
            <p>
                <Link to=" " style={{display:'flex', gap:'1rem',alignItems:'center'}}><SmsFailedIcon /> Notice</Link>
            </p>
            <p style={{ marginTop: '20rem' }}>
                <a  onClick={handleLogout} style={{display:'flex', gap:'1rem',alignItems:'center'}}><LogoutIcon /> Logout</a>
            </p>
        </div>
    );
}

export default Dashboard;
