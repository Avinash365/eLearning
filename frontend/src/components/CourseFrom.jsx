import '../styling/CourseFrom.css'
import CloseIcon from '@mui/icons-material/Close';

function closeCourseFrom(){
    document.querySelector('.courseFrom').classList.remove('visible');
}


function CourseFrom() {
    return ( 
            <div className="courseFrom"> 
                <a onClick={closeCourseFrom}><CloseIcon style={{color:'#674818',border:'',paddingLeft:'800px', margin:'0 0 0 0'}}/></a>
                <input
                    type="text"
                    placeholder='Course Name'
                /> 
                <input
                    type="text"
                    placeholder='Course Name'
                />
                <input
                    type="text"
                    placeholder='courseUrl'
                />
                <input
                    type="number"
                    placeholder='Number of Lessons'
                /> 
                <input type="number"
                    placeholder='Courese Duration in week'  

                />
                <select name="" id="">
                    <option selected>Level</option>
                    <option value="">Beginner</option>
                    <option value="">Medium</option>
                    <option value="">Advance</option>
                </select>
                <textarea name="" id=""  
                    placeholder=' Course Discription..'
                ></textarea> 
                <textarea name="" id=""  
                    placeholder='Course Details.....'
                ></textarea> 
                <button>add course</button>
            </div> 
    )
}
export default CourseFrom; 