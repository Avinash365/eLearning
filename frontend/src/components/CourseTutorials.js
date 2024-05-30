import * as React from 'react';
import '../styling/CourseTutorials.css'
import Rating from '@mui/material/Rating';



import Typography from '@mui/material/Typography';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = React.useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 800) : text}
            <a
                onClick={toggleReadMore}
                className="read-or-hide"
                style={{ color: "green" }}
            >
                {isReadMore ? "...read more" : " show less"}
            </a>
        </p>
    );
};



function CourseTutorials() {

    const [value, setValue] = React.useState(4) 

    return (
        <div style={{ padding: '2rem' }}>
            <a style={{ color: '#674818', margin: '0 0 0 7rem', textDecoration: 'underline', fontWeight: 'bold' }}>&lt; Back</a>
            <div className="courseTutorials">
                <h2 style={{ color: '#0A4A4A', margin: '2rem 0 0 2rem' }}>{'Unconscious Bias'}</h2>
                <iframe
                    src="https://www.youtube.com/embed/jC3YhBFKZxI"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded YouTube"
                ></iframe>
                <div className='courseTutorialsDiscription'>
                    <div className="courseTutorialsDiscriptionInfo">
                        <p><PersonOutlineOutlinedIcon /> Creator:<span style={{ color: '#674818' }}>{'Reena Jacob'}</span></p>
                        <p><FileDownloadOutlinedIcon /> Uploaded On:<span style={{ color: '#674818' }}>{'12/04/2022'}</span></p>
                        <p><TimelapseOutlinedIcon /> Duration:<span style={{ color: '#674818' }}>{'25mins'}</span></p>
                        <p><LanguageSharpIcon /> Language:<span style={{ color: '#674818' }}>{'English'}</span></p>
                    </div>
                    <button>Enroll Now</button>
                    <Rating name="read-only" value={4} readOnly style={{ margin: '0 0 0 9rem' }} />
                    <Typography component="legend" color={'#674818'}>{'(90000)'}</Typography>
                </div>

                <h2 style={{ color: '#674818', textDecoration: 'underline', margin: '0 0 0 2rem' }}>Details</h2>
                <div className='details'>
                    <ReadMore>
                        GeeksforGeeks: A Computer Science portal for geeks. It contains well written, well thought and well explained compute science, programming articles and quizzes. It provides a variety of services for you to learn, so thrive and also have fun! Free Tutorials, Millions of Articles, Live, Online and Classroom Courses ,Frequent Coding Competitions, Webinars by Industry Experts, Internship opportunities, and Job Opportunities. Knowledge is power! GeeksforGeeks: A Computer Science portal for geeks. It contains well written, well thought and well explained compute science, programming articles and quizzes. It provides a variety of services for you to learn, so thrive and also have fun! Free Tutorials, Millions of Articles, Live, Online and Classroom Courses ,Frequent Coding Competitions, Webinars by Industry Experts, Internship opportunities, and Job Opportunities. Knowledge is power!  GeeksforGeeks: A Computer Science portal for geeks. It contains well written, well thought and well explained compute science, programming articles and quizzes. It provides a variety of services for you to learn, so thrive and also have fun! Free Tutorials, Millions of Articles, Live, Online and Classroom Courses ,Frequent Coding Competitions, Webinars by Industry Experts, Internship opportunities, and Job Opportunities. Knowledge is power!  GeeksforGeeks: A Computer Science portal for geeks. It contains well written, well thought and well explained compute science, programming articles and quizzes. It provides a variety of services for you to learn, so thrive and also have fun! Free Tutorials, Millions of Articles, Live, Online and Classroom Courses ,Frequent Coding Competitions, Webinars by Industry Experts, Internship opportunities, and Job Opportunities. Knowledge is power!  GeeksforGeeks: A Computer Science portal for geeks. It contains well written, well thought and well explained compute science, programming articles and quizzes. It provides a variety of services for you to learn, so thrive and also have fun! Free Tutorials, Millions of Articles, Live, Online and Classroom Courses ,Frequent Coding Competitions, Webinars by Industry Experts, Internship opportunities, and Job Opportunities. Knowledge is power!
                    </ReadMore>
                </div>

                <h2 style={{ color: '#674818', textDecoration: 'underline', margin: '0 0 0 2rem' }}>Lession</h2>
                <div className='lession'>
                    <div style={{ margin: '0 0 0 2rem' }}>
                        <span style={{ color: 'black', fontSize: 'x-large', fontWeight: 'bold' }}>{'Lession 1'}</span><span style={{ color: '#674818', fontSize: 'x-large', fontWeight: 'bold', margin: '0 0 0 1rem' }}>{'Lesson Title'}</span>
                        <p>Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.</p>
                    </div>
                    <div style={{ margin: '0 0 0 2rem' }}>
                        <span style={{ color: 'black', fontSize: 'x-large', fontWeight: 'bold' }}>{'Lession 1'}</span><span style={{ color: '#674818', fontSize: 'x-large', fontWeight: 'bold', margin: '0 0 0 1rem' }}>{'Lesson Title'}</span>
                        <p>Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.</p>
                    </div>
                    <div style={{ margin: '0 0 0 2rem' }}>
                        <span style={{ color: 'black', fontSize: 'x-large', fontWeight: 'bold' }}>{'Lession 1'}</span><span style={{ color: '#674818', fontSize: 'x-large', fontWeight: 'bold', margin: '0 0 0 1rem' }}>{'Lesson Title'}</span>
                        <p>Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.</p>
                    </div>
                    <div style={{ margin: '0 0 0 2rem' }}>
                        <span style={{ color: 'black', fontSize: 'x-large', fontWeight: 'bold' }}>{'Lession 1'}</span><span style={{ color: '#674818', fontSize: 'x-large', fontWeight: 'bold', margin: '0 0 0 1rem' }}>{'Lesson Title'}</span>
                        <p>Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.</p>
                    </div>
                    <div style={{ margin: '0 0 0 2rem' }}>
                        <span style={{ color: 'black', fontSize: 'x-large', fontWeight: 'bold' }}>{'Lession 1'}</span><span style={{ color: '#674818', fontSize: 'x-large', fontWeight: 'bold', margin: '0 0 0 1rem' }}>{'Lesson Title'}</span>
                        <p>Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.</p>
                    </div>
                    <div style={{ margin: '0 0 0 2rem' }}>
                        <span style={{ color: 'black', fontSize: 'x-large', fontWeight: 'bold' }}>{'Lession 1'}</span><span style={{ color: '#674818', fontSize: 'x-large', fontWeight: 'bold', margin: '0 0 0 1rem' }}>{'Lesson Title'}</span>
                        <p>Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.</p>
                    </div>
                    <div style={{ margin: '0 0 0 2rem' }}>
                        <span style={{ color: 'black', fontSize: 'x-large', fontWeight: 'bold' }}>{'Lession 1'}</span><span style={{ color: '#674818', fontSize: 'x-large', fontWeight: 'bold', margin: '0 0 0 1rem' }}>{'Lesson Title'}</span>
                        <p>Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.</p>
                    </div>

                </div>
                <h2 style={{ color: '#674818', textDecoration: 'underline', margin: '0 0 0 2rem' }}>Write a Review</h2>
                <div className='courseTutorialsReview'>
                    <input type='textarea' placeholder='Type Something..'>
                    </input>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        style={{
                            width: '200px',
                            backgroundColor: '#674818',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            border: '2px solid #674818',
                            borderRadius: '0 2px 2px 0'
                        }}
                    />
                    <a
                        style={{
                            color: "#868686",
                            margin: '0.8rem 0 0 3rem',
                            textDecoration: 'underline'
                        }}>

                        View others review</a>
                </div>
            </div>
        </div>
    )
}
export default CourseTutorials; 