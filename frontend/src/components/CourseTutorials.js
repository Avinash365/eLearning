import * as React from 'react';
import '../styling/CourseTutorials.css'
import Rating from '@mui/material/Rating';

import { useLocation } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


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


function LessionBox(Props) {
    return (
        <div style={{ margin: '0 0 0 2rem' }}>
            <span style={{ color: 'black', fontSize: 'x-large', fontWeight: 'bold' }}>Lession {Props.lessionNo}</span><span style={{ color: '#674818', fontSize: 'large', fontWeight: 'bold', margin: '0 0 0 1rem' }}>{Props.title}</span>
            <p>{Props.description}</p>
        </div>
    )
};


function CourseTutorials() {

    const [value, setValue] = React.useState(4)
    const location = useLocation();

    const { Props } = location.state;

    if (!Props) {
        return <h1 style={{ color: "black" }}>No course details available.</h1>;
    }

    console.log(Props)
    const { courseName, courseUrl, courseDetails, lessons } = Props;

    const embedCourseUrl = convertToEmbedUrl(courseUrl);

    console.log({ courseName, courseUrl, courseDetails, lessons });

    function setLessionBox(lessons, index) {
        return (
            <LessionBox
                key={lessons.id}
                lessionNo={index + 1}
                title={lessons.title}
                description={lessons.description}
            />
        )
    }

    return (
        <div style={{ padding: '2rem' }}>
            <a 
                onClick={() => window.history.back()}
                style={{
                    color: '#674818',
                    margin: '0 0 0 7rem',
                    textDecoration: 'underline',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <NavigateBeforeIcon />
                <span>Back</span></a>

            <div className="courseTutorials">
                <h2 style={{ color: '#0A4A4A', margin: '2rem 0 0 2rem' }}>{courseName}</h2>
                <iframe
                    src={embedCourseUrl}
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
                        {courseDetails}
                    </ReadMore>
                </div>
                <h2 style={{ color: '#674818', textDecoration: 'underline', margin: '0 0 0 2rem' }}>Lession</h2>
                <div className='lession'>
                    {lessons.map(setLessionBox)}
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

function convertToEmbedUrl(youtubeUrl) {
    // Extract the video ID from the URL
    const url = new URL(youtubeUrl);
    let videoId;

    // Check if it's a short URL (e.g., youtu.be)
    if (url.hostname === 'youtu.be') {
        videoId = url.pathname.slice(1);
    } else {
        // Regular YouTube URL
        videoId = url.searchParams.get('v');
    }

    // Create the embed URL
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return embedUrl;
}