import '../styling/CourseFrom.css';
import { useState } from 'react'; 
import useAddCourse from '../hooks/useAddCourse';

import CloseIcon from '@mui/icons-material/Close';

function closeCourseFrom() {
    document.querySelector('.courseFrom').classList.remove('visible');
}

function CourseFrom() { 

    const {addCourse} = useAddCourse(); 

    const [inputs, setInputs] = useState({
        courseName: "",
        courseUrl: "",
        timeTakenToComplete: "",
        courseDiscription: "",
        courseDetails: "",
        numberOfLessons: "",  // Added numberOfLessons to the state
        courseLevel: "",
        price:"", 
    });

    const [lessons, setLessons] = useState([]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLessonChange = (index, e) => {

        const { name, value } = e.target;
        const updatedLessons = lessons.map((lesson, lessonIndex) => (
            lessonIndex === index ? { ...lesson, [name]: value } : lesson
        ));
        setLessons(updatedLessons);
    }; 

    const handleNumberOfLessonsChange = (e) => {
        const numberOfLessons = parseInt(e.target.value, 10);

        setInputs(prev => ({
            ...prev,
            numberOfLessons: numberOfLessons
        }));
        const updatedLessons = Array.from({ length: numberOfLessons }, (_, index) => (
            lessons[index] || { title: "", description: "" }
        ));
        setLessons(updatedLessons);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();   
        const courseData = { ...inputs, lessons };  
        console.log(courseData); 
        

        await addCourse(courseData); 
    };

    return (
        <form className="courseFrom" onSubmit={handleSubmit}>
            <a onClick={closeCourseFrom}><CloseIcon style={{ color: '#674818', cursor: 'pointer', paddingLeft: '800px', margin: '0 0 0 0' }} /></a>
            <input 
                type="text"
                name='courseName'
                value={inputs.courseName}
                placeholder='Course Name'
                onChange={handleChange} 
            
            />  
            <input 
                type="text"
                name='price'
                value={inputs.price}
                placeholder='Coures Price'
                onChange={handleChange} 
            
            /> 
            <input
                type="text"
                name='courseUrl'
                value={inputs.courseUrl}
                placeholder='Course URL'
                onChange={handleChange}
            />
            <select
                name='timeTakenToComplete'
                value={inputs.timeTakenToComplete}
                onChange={handleChange}
            >
                <option value="" disabled selected>Course Duration</option>
                <option value="4 weeks">4 weeks</option>
                <option value="8 weeks">8 weeks</option>
                <option value="12 weeks">12 weeks</option>
                <option value="16 weeks">16 weeks</option>
                <option value="20 weeks">20 weeks</option>
                <option value="24 weeks">24 weeks</option>
                <option value="28 weeks">28 weeks</option>
                <option value="32 weeks">32 weeks</option>
            </select>
            <select
                name='numberOfLessons'
                value={inputs.numberOfLessons}
                onChange={handleNumberOfLessonsChange}
            >
                <option value="" disabled selected>Number of Lessons</option>
                {Array.from({ length: 8 }, (_, i) => i + 5).map(number => (
                    <option key={number} value={number}>{number}</option>
                ))}
            </select> 

            <select
                name="courseLevel"
                value={inputs.courseLevel}
                onChange={handleChange}
            >
                <option value="" disabled selected>Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Medium">Medium</option>
                <option value="Advanced">Advanced</option>
            </select>

            <textarea
                name="courseDiscription"
                value={inputs.courseDiscription}
                placeholder='Course Description...'
                onChange={handleChange}
            ></textarea>

            <textarea
                name="courseDetails"
                value={inputs.courseDetails}
                placeholder='Course Details...'
                onChange={handleChange}
            ></textarea> 
            
           

            {lessons.map((lesson,index) => (
                <div key = {index} className='lessonsDetails'>
                   <input
                        type="text"
                        name="title"
                        value={lesson.title}
                        placeholder={`Lesson ${index + 1} Title`}
                        onChange={(e) => handleLessonChange(index, e)}
                    />  
                    <textarea
                        name="description"
                        value={lesson.description}
                        placeholder={`Lesson ${index + 1} Description`}
                        onChange={(e) => handleLessonChange(index, e)}
                    ></textarea>
                </div>
            ))}
            <button type="submit">Add Course</button>
        </form>
    );
}

export default CourseFrom;
