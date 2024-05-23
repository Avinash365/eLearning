import { Link } from 'react-router-dom';
import '../styling/Navbar.css';

import { Avatar1 } from '../components/Avatar.js';

import { useAuthContext } from '../context/AuthContext.jsx'; 
import { useNavigate } from 'react-router-dom';


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
                <Link to='/' className=''>NAME</Link>
            </div>
            <div className='rightItem' style={{}}>
                {/* <Link to='/courses'>Courses</Link>
                <Link to='/instructor'>Instructor</Link> */}
                <Link to='instructor' style={{marginTop:'2rem'}}>{authUser.name}</Link>
                <Link to='instructor'>
                    <Avatar1 pic={authUser.profilePic} />
                </Link>
                {/* <Link to='/signup'>SignUp</Link>
                <Link to='/login'>LogIn</Link> */}
            </div>
        </div>
    );
}
export default SignedNavbar; 