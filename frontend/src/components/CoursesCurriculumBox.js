import '../styling/CourseDiscription.css' 

function CourseCurriculumBox(Props){
    return(
        <div className='courseCurriculumBox'>
            <h2 style={{color:'#674818', fontSize:'30px'}}>0{Props.lessionNo}</h2> 
            <p style={{color:'black'}}>{Props.titleDiscriptions}</p>
        </div>
    )
} 
export default CourseCurriculumBox; 