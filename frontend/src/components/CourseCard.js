import '../styling/CourseCard.css'
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined'; 

function CourseCard(Props){
    return (
        <div className='CourseCard' >

            <img src={Props.pic} className='CourseCardPic' /> 

              
            <div className='logoDiv1'>
                    <h2 style={{ width:'180px',minWidth:'180px', marginLeft:'0rem', color:'#674818'}}>{Props.name}</h2>  
                    <button style={{width:'40px', height:'40px',color:'white', backgroundColor:'#674818',borderRadius:'50%', fontSize:'x-large'}}>+</button>
            </div>
            <div className='CourseDiscription'> 

                <h4  style={{color:'black'}}>{Props.info}</h4>
                <p style={{color: 'red', fontWeight:'bold'}}>{Props.price}</p>
                <p style={{color: 'rgba(134, 134, 134, 1)', marginTop:'20px'}}>{Props.rating}</p> 
                <a href=''>more info</a> 
                <button>Buy Now</button>
            </div>
        </div>
    ); 
}
export default CourseCard; 







