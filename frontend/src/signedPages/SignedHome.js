
import '../App.css'


import SignedNavbar from './SignedNavbar.js'
import Landing from '../components/Landing.js'
import ScrollCourseCard from '../components/ScrollCourseCard.js'
import ScrollTutorsCard from '../components/ScrollTutorsCard.js'
// import InstructorList from '../components/InstructorList.js' 
import InstructorList from '../components/InstructorLists.js' 
import ScrollFeedbackCard from '../components/ScrollFeedbackCard.js'
import Footer from '../components/Footer.js' 

// import CourseDiscription from '../components/CourseDiscription.js';

function Home1() {

  return (
    <div>  
      <SignedNavbar/>  
      <Landing/>    
      <ScrollTutorsCard/>
      {/* <CourseDiscription/> */}
      <ScrollCourseCard title="All that you need in one place"/> 
      <ScrollCourseCard title="Most Veiwed Courses"/>
      <InstructorList/> 
      <ScrollFeedbackCard/>
      <Footer/>
    </div>
  );
}
export default Home1;

