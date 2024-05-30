import '../styling/Login.css'

import { Link } from "react-router-dom";

import useSignup from '../hooks/useSignup.js'
import { useState } from 'react';

const SignUp = () => {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })
    const { loading, signup } = useSignup();

    // Initialize the state to keep track of which checkbox is checked 

    const [checked, setChecked] = useState(null);

    // Handler for the first checkbox
    const handleFirstCheckboxChange = () => {
        setChecked(checked === 'student' ? null : 'student');
    };
    // Handler for the second checkbox
    const handleSecondCheckboxChange = () => {
        setChecked(checked === 'teacher' ? null : 'teacher');
    };

    // Function to get the value associated with the checked checkbox
    const getCheckedValue = () => {
        if (checked === 'student') {
            return 'student'
        } else if (checked === 'teacher') {
            return 'teacher';
        }
        return null;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => { 

        const gender =  getCheckedValue(); 
        inputs.gender = gender; 
        e.preventDefault(); // Corrected typo from preventDeffault() to preventDefault() 
        await signup(inputs);
        console.log(inputs); // Log the inputs after signup is complete
    }

    return (
        <div className='loginPage'>
            <form action="" onSubmit={handleSubmit} className="loginFrom">

                <div className='loginFrom1' style={{ display: 'block' }}>
                    <h2 style={{ color: '#674818', float: 'right', width: 'full', marginTop: '5rem', fontWeight: 'bold', height: 'fit-content', marginRight: '44%' }}>SignUp</h2>
                    <p style={{ color: 'black', marginTop: '0px', marginRight: '23%', width: 'fit-content', height: 'fit-content', float: 'right' }}>How to i get started lorem ipsum dolor at?</p>
                    <input
                        type='text'
                        name='name'
                        value={inputs.name}
                        id=''
                        placeholder='Username'
                        onChange={handleChange}
                    />
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
                    <input
                        type='Password'
                        name='confirmPassword'
                        value={inputs.confirmPassword}
                        id=''
                        onChange={handleChange}
                        placeholder='Conform Password' />

                    <div style={{ border: '', width: 'fit-content', float: 'right', marginRight: '6rem', marginBottom: '1rem' }}>
                        <input
                            type="checkbox"
                            checked={checked === 'student'}
                            id=''
                            onChange={handleFirstCheckboxChange}
                        /><label style={{ marginLeft: '.5rem', color: '#674818' }}>Student</label>
                        <input
                            type="checkbox"
                            checked={checked === 'teacher'}
                            onChange={handleSecondCheckboxChange}
                            style={{ marginLeft: '1rem' }} /><label style={{ marginLeft: '.5rem', color: '#674818' }}>Instructor</label>
                    </div>
                    <button disabled={loading} className={`${loading ? 'cursor-not-allowed' : ''} btn`}>
                        {loading ? <span className="loading loading-spinner"></span> : "SignUp"}
                    </button>
                    <p style={{ height: 'fit-content', width: 'fit-content', float: 'right', marginRight: '36%', marginTop: '0.5rem' }}><Link to='/login' style={{ textDecoration: 'none',color:'black' }}>allready registered?</Link></p>

                </div>
                <img src='./static/loginImg.png' alt='img' style={{ height: '500px', borderRadius: '0 15px 15px 0' }} />
            </form>
        </div>
    )
}
export default SignUp;