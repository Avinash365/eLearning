import '../styling/CourseCard.css'
import { Link } from 'react-router-dom';
// import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';  

import Rating from '@mui/material/Rating';

function CourseCard(Props) {
    return (
        <div style={{ width: 'auto', height: 'auto', display: 'block' }}>
            <div className='CourseCard' >

                <img src={Props.pic} className='CourseCardPic' />


                <div className='logoDiv1'>
                    <h2 style={{ width: '180px', minWidth: '180px', marginLeft: '0rem', color: '#674818' }}>{Props.name}</h2>
                    <button style={{ width: '40px', height: '40px', color: 'white', backgroundColor: '#674818', borderRadius: '50%', fontSize: 'x-large' }}>+</button>
                </div>
                <div className='CourseDiscription'>

                    <h4 style={{ color: 'black' }}>{Props.info}</h4>
                    <p style={{ color: 'red', fontWeight: 'bold' }}>{Props.price}</p>
                    <p style={{ color: 'rgba(134, 134, 134, 1)', marginTop: '20px' }}><Rating name="half-rating-read" defaultValue={Props.rating} precision={0.5} readOnly /></p>
                    <a href=''>more info</a>
                    <button>Buy Now</button>
                </div>
            </div>
            <div
                style={{
                    // position:"absolute", 
                    marginTop: '1rem',
                    display:'flex', 
                    alignItems:'center',
                    justifyContent:'center',
                    // border: 'solid black'
                }}
            >
                <Link style={{ color: '#674818'}}>View More info</Link>
            </div>
        </div>
    );
}
export default CourseCard;






