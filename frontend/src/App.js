import { Navigate, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Home1 from "./signedPages/SignedHome.js";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import StudentPage from './pages/StudentPage';
import TeacherDash from './components/TeacherDash';
import CoursePage from './pages/CoursePage';
<<<<<<< HEAD
import CourseTutorials from "./components/CourseTutorials.js"; 

=======
import CourseTutorials from "./components/CourseTutorials.js";
import Payment from "./pages/Payment.js";
>>>>>>> 139de296ba6ceb1f7b4b8190eab4d775b2079fb8

// import Navbar from './components/Navbar';

import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';


import './App.css'; // Assuming you have a main CSS file


function App() {
  const { authUser } = useAuthContext();
  return (
    <div>
      <Routes> 
        
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/si1" element={<Home1 />} />  
        <Route path="/course-details/:id" element={<CourseTutorials/>} />
        {/* <Route path ="/login" element={<Login/>} /> */}
        <Route path="/login" element={authUser ? <Navigate to={`/${authUser.email}`} /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to={`/${authUser.email}`} /> : <SignUp />} />
        <Route path="/courses" element={<Home/>} />
=======
        <Route path="/si" element={<Home1 />} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/login" element={authUser ? <Navigate to={`/${authUser.email}`} / > : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to={`/${authUser.email}`} / > : <SignUp />} />
        <Route path="/courses" element={<CoursePage />} />
>>>>>>> 139de296ba6ceb1f7b4b8190eab4d775b2079fb8
        {authUser && authUser.email && (
          <>
            <Route path={`/${authUser.email}`} element={<Home1 / >} />
            <Route path={`/${authUser.email}/instructor`} element={<StudentPage />} />
            <Route path="/teacher-dash" element={<TeacherDash />} />
      
          </>
        )}
      </Routes>
      <Toaster />
    </div>
  );
}
export default App;
