import '../../styling/StudentDash.css'
import LaptopIcon from '@mui/icons-material/Laptop';




function CourseBox() {
    return (
        <div className="courseBox" style={{display:'flex'}}>
            <div style={{border:'', maxWidth:'50%', marginLeft:'2rem'}}>
                <h4 style={{ color: '#674818', fontWeight:'',marginTop:'1rem', fontSize:'',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '16px',
                    lineHeight: '16px'

                }}>{'Object oriented programming'}</h4>
                <button style={{backgroundColor:'#674818',color:'white', width:'70px', height:'30px', borderRadius:'20px',marginTop:'1rem'}}>{'View'}</button>
            </div>
            <LaptopIcon style={{ fontSize: '70px', color: '#674818', border:'', marginTop:'1rem'}} />
        </div>
    )
}
export default CourseBox; 