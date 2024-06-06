import { Link } from 'react-router-dom';
import '../styling/Navbar.css';

// import { Avatar1 } from '../components/Avatar.js';

import { useAuthContext } from '../context/AuthContext.jsx'; 
import { useNavigate } from 'react-router-dom'; 

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function SignedNavbar() {  
    const navigate = useNavigate();
    const { authUser } = useAuthContext(); 

    if(!authUser){
        navigate('/');
    }
    console.log(authUser); 
    
    return (
        <div className="nav">
            <div className='leftItem'>
                <Link to='/' className=''>LEARNIFY</Link>
            </div>
            <div className='rightItem' style={{}}>
                <Link to={`/${authUser.email}/course`} state={{}}>Courses</Link>
                {/* <Link to='/instructor'>Instructor</Link> */} 
                <Link to={authUser.gender === 'teacher' ? `/${authUser.email}/instructor`: `/${authUser.email}/student`}>{authUser.name}</Link>
                <Link to={authUser.gender === 'teacher' ? `/${authUser.email}/instructor` : `/${authUser.email}/student`} >
                    {/* <Avatar1 pic={authUser.profilePic}  className="navPic"/> */}  
                    <img src='/static/icon1.png' style={{width:'50px',height:'50px'}}/> 

                    {/* <AccountCircleIcon className='navPic' fontSize="large"/> */}
                </Link>
                {/* <Link to='/signup'>SignUp</Link>
                <Link to='/login'>LogIn</Link> */}
            </div>
        </div>
    );
}
export default SignedNavbar; 