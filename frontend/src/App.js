import {Navigate, Route, Routes} from "react-router-dom"; 

import Home from './pages/Home';
import Home1 from "./signedPages/SignedHome.js";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import StudentPage from './pages/StudentPage';
import TeacherDash from './components/TeacherDash';
import CoursePage from './pages/CoursePage';

// import Navbar from './components/Navbar';

import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';


import './App.css'; // Assuming you have a main CSS file

function App() {
  const { authUser } = useAuthContext();
  return (
    <div>
          {/* <Navbar /> Assuming you have a Navbar component */}
          <Routes>
            <Route path={`/${authUser.email}`} element={<Home1 />} />
            <Route path="/" element={<Home />} />
            <Route path="/si" element={<Home1 />}/>
            <Route path="/login" element={authUser ? <Login />: <Navigate to='/' />} />
            <Route path="/signup" element={authUser ? <SignUp />:<Navigate to='/' />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path={`/${authUser.email}/instructor`} element={<StudentPage />} />
            <Route path="/teacher-dash" element={<TeacherDash />} />
            {/* Add other routes here */}
          </Routes>
        <Toaster />
    </div>
  );
}

export default App;
