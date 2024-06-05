import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined'; 
import MobileScreenShareOutlinedIcon from '@mui/icons-material/MobileScreenShareOutlined';

import '../styling/Footer.css'
import { Link } from 'react-router-dom';  
 



function Footer() { 
   
    return (
        <div className='footer'> 
            <div className='footer0'> 
                <img src='/static/footer1.png'  
                    style={{
                        height:'250px',
                        // border:'solid black',
                        margin:'12.5rem 0 0 0'
                    }}
                />
                <div className='footer0-box1'>  
                <h3 style={{ fontWeight: 'bold', fontSize:'30px' }}>GET IN TOUCH</h3>

                    <p style={{marginTop:'1rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae arcu lorem cras lacus amet. In cras odio enim rhoncus consectetur.</p>  
    
                   <p> <MobileScreenShareOutlinedIcon style={{marginTop:'1rem',marginRight:'2rem',color:'#674818'}}/> <span style={{}}>+91134644625</span></p>
                   <p> <MarkunreadOutlinedIcon style={{marginTop:'1rem',marginRight:'2rem',color:'#674818'}}/> avinashjha2023.25@gmail.com</p>
                </div> 
                <div className='footer0-box2'> 
                    <h3>SAY SOMTHING ?</h3>   
                    <input type='text' name='Name' id='' placeholder='Name'/>  
                    <input type='email' name='email' id='' placeholder='Email' /> 
                    <textarea id='' name='' placeholder='SAY SHOMTHING ?'/>  
                    <button>SEND</button>
                </div>
            </div>
            <div className='footer1'> 
                <div className='footer2'>
                    <div className='box1'>
                        <h3>HYDRAXXDESIGNS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae arcu lorem cras lacus amet. In cras odio enim rhoncus consectetur. </p>
                    </div>
                    <div className='box1'>
                        <h3>ABOUT US</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae arcu lorem cras lacus amet. In cras odio enim rhoncus consectetur. </p>
                    </div>
                    <div className='box2'>
                        <YouTubeIcon />
                        <TwitterIcon /> <PinterestIcon /> <LinkedInIcon />
                    </div>
                </div>
                <div className='foot1'>
                    <li to='/'>H0ME</li>
                    <li >PROFILE</li>
                    <li >OPTION</li>
                    <li >OPTION</li>
                    <li >OPTION</li>
                </div>
            </div>
        </div>
    );
}
export default Footer; 