import { Link } from 'react-router-dom';
import '../styling/Navbar.css'

function Navbar() {
    return (
        <div className="nav">
            <div className='leftItem'> 
                <Link to='/' className=''>LEARNIFY</Link>
            </div>
            <div className='rightItem' style={{}}>
                <Link to='/courses'>Courses</Link>
                <Link to='/instructor'>Instructor</Link>
                <Link to='/signup'>SignUp</Link>
                <Link to='/login'>LogIn</Link>
            </div>
        </div>
    );
}
export default Navbar; 