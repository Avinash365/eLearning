import React from 'react';
import '../styling/CourseCard.css';
import CourseCard from './CourseCard';
import { useQuery } from '@tanstack/react-query';
import fetchCourses from '../context/reactQuerySetup';

const ScrollCourseCard = (Props) => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['courses'],
        queryFn: fetchCourses,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });

    function createCard(course) {
        return (
            <CourseCard 
                key={course._id} 
                id = {course._id}
                name={course.courseName}
                info={course.courseDuration}
                price={course.price}
                rating={course.rating}
                pic={course.image}
            />
        );
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching courses</div>;
    if (!data) return null; // Optional: Render nothing if data is undefined

    return (
        <div className='courseCardBox' >
            <p style={{ color: '#674818', marginLeft: '0px', marginTop: '4rem', marginBottom: '0px', fontSize: 'xx-large', padding: '0px' }}>{Props.title}</p>
            <hr style={{ color: '#674818', marginLeft: '0px', width: '50%', marginTop: '0px', fontSize: 'xx-large' }} />
            <div style={{ border: '', width: 'fit-content', float: 'right', marginRight: '5rem' }}>
                <input type="checkbox" /><label style={{ color: 'black', marginLeft: '.5rem', color: '#674818' }}>Free course</label>
                <input type="checkbox" style={{ marginLeft: '1rem' }} /><label style={{ color: 'black', marginLeft: '.5rem', color: '#674818' }}>Paid Course</label>
            </div>
            <div className='scrollCourseCard'>
                {data.map(createCard)}
            </div>
        </div>
    );
};

export default ScrollCourseCard;
