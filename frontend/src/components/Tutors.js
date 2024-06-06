import '../styling/Tutors.css'

import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';


function Tutors(Props) {
    return (
        <div className='TutorsCard' >

            <img src={Props.pic} className='TutorsCardPic' />
            <h2 style={{ textDecoration: 'underline', marginLeft:'2rem', color:'rgba(134, 134, 134, 1)' }}>{Props.name}</h2> 

            <div className='TutorsDiscription' style={{ marginLeft: '3rem', padding: '0px' }}>
                <p  style={{color:'rgba(10, 74, 74, 1)'}}>{Props.info}</p>
                <p style={{color: '#674818'}}>{Props.course}</p>
                <div className='logoDiv10'>
                    <StarPurple500OutlinedIcon style={{color: 'rgba(218, 195, 74, 1)'}} />
                    <p style={{color: 'rgba(134, 134, 134, 1)'}}>{Props.rating}</p>
                </div>
            </div>
        </div>
    );
}
export default Tutors;