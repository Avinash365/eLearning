import '../App.css'
import Navbar from '../components/Navbar.js'
import Landing from '../components/Landing.js'
import ScrollCourseCard from '../components/ScrollCourseCard.js'
import ScrollTutorsCard from '../components/ScrollTutorsCard.js'
// import InstructorList from '../components/InstructorList.js' 
import InstructorList from '../components/InstructorLists.js' 
import ScrollFeedbackCard from '../components/ScrollFeedbackCard.js'
import Footer from '../components/Footer.js' 

import CourseDiscription from '../components/CourseDiscription.js';

import Payment from './Payment.js'



function Home() {

  return (
    <div>  
      <Navbar/>  
      <Landing/>    
      <ScrollTutorsCard/> 
      {/* <Payment /> */}
      {/* <CourseDiscription/> */}
      <ScrollCourseCard title ="Most View Course"/>
      <InstructorList/> 
      <ScrollFeedbackCard/>
      <Footer/>
    </div>
  );
}
export default Home;

