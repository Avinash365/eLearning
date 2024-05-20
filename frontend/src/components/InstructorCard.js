import '../styling/InstructorCard.css' 


import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';


function InstructorCard(Props) {
    return (
        <div className='InstrctorCard'>
            <h2 style={{ color: '#674818', textDecoration: 'underline' }}>{Props.name}</h2>
            <div className='InstrctorCard1'>
                {/* <Avatar ></Avatar>  */}
                <img src={Props.pic} className='InstructorCardPic' />
                <div>
                    <div className='discription'>
                        <div className='logoDiv'>
                            <StarPurple500OutlinedIcon />
                            <p>{Props.rating}</p>
                        </div>
                    </div>
                    <div className='discription'>
                        <div className='logoDiv'>
                            <ReviewsOutlinedIcon/>
                            <p>{Props.review}</p>
                        </div>
                    </div>
                    <div className='discription'>
                        <div className='logoDiv'>
                            <SupervisorAccountOutlinedIcon />
                            <p>{Props.student}</p>
                        </div>
                    </div>
                    <div className='discription'>
                        <div className='logoDiv'>
                            <PlayCircleFilledOutlinedIcon />
                            <p>{Props.course}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default InstructorCard;