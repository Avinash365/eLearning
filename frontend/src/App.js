
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home.js';
import Login from './pages/Login.js' 
import SignUp from './pages/SignUp.js';   
import StudentPage from './pages/StudentPage.js';
import TeacherDash from './components/TeacherDash.js' 
import CoursePage from './pages/CoursePage.js';

import Navbar from './components/Navbar.js';


<style>
@import url('https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>

function App() {

  return (
    <div>  
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/signup" element={<SignUp />} /> 
                <Route path='/login' element={<Login/>} />
                <Route path='/courses' element={<CoursePage/>} /> 
                <Route path='/instructor' element ={<StudentPage/>}/>
                {/* Add other routes here */}
            </Routes>
        </Router>
    </div>
  );
}
export default App;

