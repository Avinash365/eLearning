import '../styling/LogoDiv.css';   

import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';

function LogoDiv(Props){ 
    return (
       <div>
            <div className='logoDiv'>
                <Props.Logo/>
                <p>{Props.title}</p>
            </div>
       </div> 
    )
} 
export default LogoDiv; 