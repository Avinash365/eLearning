import '../styling/Login.css' 
import GoogleIcon from '@mui/icons-material/Google'; 

import useLogin from '../hooks/useLogin'; 
import { useState  } from 'react'; 
// import { From } from 'react-router-dom';

const Login = ()=>{ 

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    }) 
    const {loading, login} = useLogin(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: value
        }));
    }; 

    const handleSubmit = async (e) => {
        e.preventDefault(); // Corrected typo from preventDeffault() to preventDefault() 
        // console.log(inputs.email inputs.password});
        await login(inputs);
         // Log the inputs after signup is complete
    }

    return (
        <div className='loginPage'>
            <form action= "" onSubmit={handleSubmit} className="loginFrom"> 
                <div className='loginFrom1' style={{display:'block'}}> 
                    <h2 style={{color:'#674818', float:'right',width:'full', marginTop:'5rem', fontWeight:'bold', height:'fit-content', marginRight:'44%'}}>LOGIN</h2> 
                     
                    <p style={{color:'black',marginTop:'0px',marginRight:'22%', width:'fit-content',height:'fit-content', float:'right'}}>How to i get started lorem ipsum dolor at?</p> 


                    <input
                        type='Email'
                        name='email'
                        value={inputs.email}
                        id=''
                        placeholder='Email'
                        onChange={handleChange}
                    />
                    <input
                        type='Password'
                        name='password'
                        value={inputs.password}
                        id=''
                        placeholder='Password'
                        onChange={handleChange}
                    />

                    <p style={{height:'fit-content',width:'fit-content', float:'right', marginRight:'20%',color:'black'}}><a>Forget Password ?</a></p>   

                    <button disabled={loading} className={`${loading ? 'cursor-not-allowed' : ''} btn`}>
                        {loading ? <span className="loading loading-spinner"></span> : "Login"}
                    </button>  

                    <div className='others'><hr/> <p style={{color:'black'}}><span style={{fontWeight:'bold'}}>Login</span> with Othrs</p><hr/></div> 
                    <a href='' style={{marginRight:'20%', textDecoration:'none'}}><div className='loginGoogle'><GoogleIcon/><p style={{marginTop:'1rem'}}>Login with <span style={{fontWeight:'bold'}}>Google</span></p></div></a>
                </div> 
                <img src='./static/loginImg.png' alt='img' style={{height:'500px',borderRadius:'0 15px 15px 0' }}/>
            </form>
        </div>
    )
}
export default Login; 