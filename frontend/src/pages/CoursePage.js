import Navbar from "../components/Navbar";
import CourseDiscription from "../components/CourseDiscription"; 
import Footer from "../components/Footer";

function CoursePage(){
    return (
        <div>
            <Navbar/>  
            <div style={{width:'1270px',height:'200px', marginLeft:'5.5rem', border:'', display:'flex',alignItems:'center', paddingTop:'8rem'}}>
                <p style={{color:"#674818",minWidth:'50%' , fontSize:'40px'}}>Online Courses available</p> 
                <p style={{color:'#59595A', minWidth:'50%'}}>Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.</p>
            </div>
            <CourseDiscription/>  
            <CourseDiscription/>
            <CourseDiscription/>
            <CourseDiscription/>  
            <button style={{color:'white',padding:'1rem', width:'100px', borderRadius:'6px', marginLeft:'45%',fontSize:'large'}}>More </button>
            <Footer/>
        </div>
    )
} 
export default CoursePage; 