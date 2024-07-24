import { Navigate, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Home1 from "./signedPages/SignedHome.js";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import StudentPage from './pages/StudentPage';
import TeacherDash from './components/TeacherDash'; 
import AdminPage from "./components/Admin/AdminPage.jsx";
import CoursePage from './pages/CoursePage';

import CourseTutorials from "./components/CourseTutorials.js";
import Payment from "./pages/Payment.js";

import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';

import './App.css';

function App() {
  const { authUser } = useAuthContext();

  function getComponentForRole(authUser) {
    switch(authUser.gender) { // Changed from authUser.gender to authUser.role
      case 'student':
        return <TeacherDash />;
      case 'teacher':
        return <StudentPage />;
      case 'admin':
        return <AdminPage />; // Assuming admin uses TeacherDash component
      default:
        return <Home1 />;
    }
  }

  console.log(authUser);
  
  return (
    <div>
      <Routes> 
        
        <Route path="/" element={<Home />} /> 
        <Route path ="/admin" element={<AdminPage/>}/>
        <Route path="/course-details/:id" element={<CourseTutorials />} />
        <Route path="/login" element={authUser ? <Navigate to={`/${authUser.email}`} /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to={`/${authUser.email}`} /> : <SignUp />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/courses" element={<CoursePage />} />

        {authUser && authUser.email && (
          <>
            <Route path={`/${authUser.email}`} element={<Home1 />} />
            <Route path={`/${authUser.email}/${authUser.gender}`} element={getComponentForRole(authUser)} />
            <Route path={`/${authUser.email}/course`} element={<CoursePage />} />
          </>
        )}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
