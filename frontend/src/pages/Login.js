import '../styling/Login.css' 
import GoogleIcon from '@mui/icons-material/Google';

function Login() {
    return (
        <div className='loginPage'>
            <div className="loginFrom"> 
                <div className='loginFrom1' style={{display:'block'}}> 
                    <h2 style={{color:'#674818', float:'right', marginRight:'0rem', width:'full', marginTop:'5rem', fontWeight:'bold', height:'fit-content', marginRight:'45%'}}>LOGIN</h2> 
                     
                    <p style={{color:'black',marginTop:'0px', width:'fit-content',height:'fit-content', float:'right', marginRight:'20%'}}>How to i get started lorem ipsum dolor at?</p>
                    <input type='email' name='Name' id='' placeholder='Email'/>  

                    <input type='Password' name='email' id='' placeholder='Password' /> 
                    <p style={{height:'fit-content',width:'fit-content', float:'right', marginRight:'20%',color:'black'}}><a>Forget Password ?</a></p>   

                    <button>Login</button>   

                    <div className='others'><hr/> <p style={{color:'black'}}><span style={{fontWeight:'bold'}}>Login</span> with Othrs</p><hr/></div> 
                    <a href='' style={{marginRight:'20%', textDecoration:'none'}}><div className='loginGoogle'><GoogleIcon/><p style={{marginTop:'1rem'}}>Login with <span style={{fontWeight:'bold'}}>Google</span></p></div></a>
                </div> 
                <img src='./static/loginImg.png' alt='img' style={{height:'500px',borderRadius:'0 15px 15px 0' }}/>
            </div>
        </div>
    )
}
export default Login; 