import '../../styling/StudentDash.css'


import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'; 
import PaymentsIcon from '@mui/icons-material/Payments'; 
import EditIcon from '@mui/icons-material/Edit';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import SmsFailedIcon from '@mui/icons-material/SmsFailed'; 
import LogoutIcon from '@mui/icons-material/Logout';

function Dashboard() {
    return (
        <div className="dashBoard">
            <p style={{ marginTop: '11rem' }}><a href=""><SpaceDashboardIcon /> Dashboard</a> </p>
            <p><a href=""><PaymentsIcon />   Payment Info</a> </p>
            <p><a href=""><EditIcon />   Registration</a> </p>
            <p><a href="">< CollectionsBookmarkIcon /> Courses</a></p>
            <p><a href="">< SmsFailedIcon /> Notice</a></p>
            <p style={{ marginTop: '25rem' }}><a href=""><LogoutIcon /> Logout</a></p>
        </div>
    );
}
export default Dashboard; 