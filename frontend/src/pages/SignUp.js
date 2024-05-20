import '../styling/Login.css'
import GoogleIcon from '@mui/icons-material/Google';

function SignUp() {
    return (
        <div className='loginPage'>
            <div className="loginFrom">
                <div className='loginFrom1' style={{ display: 'block' }}>
                    <h2 style={{ color: '#674818', float: 'right', marginRight: '0rem', width: 'full', marginTop: '5rem', fontWeight: 'bold', height: 'fit-content', marginRight: '45%' }}>SignUp</h2>

                    <p style={{ color: 'black', marginTop: '0px', width: 'fit-content', height: 'fit-content', float: 'right', marginRight: '20%' }}>How to i get started lorem ipsum dolor at?</p>
                    <input type='text' name='Name' id='' placeholder='Username' />
                    <input type='Email' name='email' id='' placeholder='Email' />
                    <input type='Password' name='Name' id='' placeholder='Password' />
                    <input type='Password' name='email' id='' placeholder='Conform Password' /> 

                    <div style={{ border: '', width: 'fit-content', float: 'right', marginRight: '6rem', marginBottom:'1rem' }}>
                        <input type="checkbox" /><label style={{ marginLeft: '.5rem',color: '#674818' }}>Student</label>
                        <input type="checkbox" style={{ marginLeft: '1rem' }} /><label style={{ marginLeft: '.5rem', color: '#674818' }}>Instructor</label>
                    </div>
                    <button>SignUp</button> 
                    <p style={{height:'fit-content',width:'fit-content', float:'right', marginRight:'35%',marginTop:'0.5rem',color:'black'}}><a>allready registered?</a></p>

                </div>
                <img src='./static/loginImg.png' alt='img' style={{ height: '500px', borderRadius: '0 15px 15px 0' }} />
            </div>
        </div>
    )
}
export default SignUp; 