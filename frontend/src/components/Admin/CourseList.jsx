import React from 'react';
//import CourseHeader from './CourseHeader';
import CourseRow from './CourseRow';
import './CourseList.css'; 
import { useEffect, useState } from 'react'; 



function CourseList() { 
    const [course, setCourse] = useState([]); 

    useEffect(() => {

            const fetchCourse = async () => {
                try {
                    const response = await fetch('http://localhost:8000/api/course/courseList'); // Replace with your API endpoint
                    // console.log(response); 
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json(); 
                    setCourse(data);
                } catch (error) {
                    console.error('There was a problem with the fetch operation:', error);
                }
            }; 
            fetchCourse(); 
    },[]); 

    return (
        
        <section className="course-list">
            <h1 className="title">Courses</h1>
            <header className="header-row">
                <div className="header-item header-item-nowrap">Course Name</div>
                <div className="header-item">created by</div>
                <div className="header-item header-item-nowrap">_id</div>
                <div className="header-item">view more</div>
            </header>
            {course.map((course, index) => (
                <CourseRow key={index} {...course} />
            ))}
        </section>
    );
}

export default CourseList;