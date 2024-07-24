// import course from "../models/course.model.js"; 

import Course from '../models/course.model.js';  
import UserCourse from '../models/userCourse.model.js'; 


export const postCourse__controller = async (req, res) => { 
    console.log(req.body); 
    try {
        const {  
            email,
            courseName, 
            courseUrl,   
            courseLevel,
            courseDiscription,
            courseDetails,  
            lessons,  
            timeTakenToComplete, 
            price, 
            authorName
        } = req.body; 

        // Validate required fields
        if (!email || !courseName || !courseUrl || !lessons || !timeTakenToComplete ) {
            return res.status(400).json({ error: 'Please Provide All Information' }); 
        }

        // Create new course instance 
        const newCourse = new Course({ 
            email,
            courseName, 
            courseUrl,   
            courseLevel,
            courseDiscription,
            courseDetails,  
            lessons,  
            timeTakenToComplete, 
            price, 
            authorName 
        });

        // Save the new course to the database
        await newCourse.save();   
        // Respond with success message and course data 

        // Find or create a UserCourse document
        let userCourse = await UserCourse.findOne({ email });

        if (!userCourse) {
            userCourse = new UserCourse({ email, courseIds: [newCourse._id] });
        } else {
            // Add the courseId to the courseIds array if it doesn't already exist
            if (!userCourse.courseIds.includes(newCourse._id)) {
                userCourse.courseIds.push(newCourse._id);
            }
        }

        // Save the updated UserCourse document
        await userCourse.save();
    

        res.status(201).json({
            _id: newCourse._id, 
            email: newCourse.email
        }); 
        console.log("Course created successfully"); 

    } catch (error) {
        console.log(error); 
        res.status(500).json({ error: error.message }); 
    }
}; 
  

export const deleteCourse__Controller = async (req, res, next) => {
    try {
        const { _id } = req.body;
        console.log(req.body);
        
        // Delete the course from the Course collection
        const course = await Course.findOneAndDelete({ _id: _id });
        
        if (!course) {
            return res.status(404).json({
                error: "Course not found",
            });
        }

        // Remove the course reference from the UserCourse collection
        await UserCourse.updateMany(
            { courseIds: _id },
            { $pull: { courseIds: _id } }
        );

        console.log("Course deleted and references removed");

        return res.status(200).json({
            message: "Course and references successfully deleted",
            course,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Something went wrong",
        });
    }
};

export const courseEnrolment_Controller = async (req, res) => {
    try {
        const { email, courseId } = req.body;
        
        // Validate input
        if (!email || !courseId) {
            return res.status(400).json({ message: 'Email and courseId are required' });
        }

        // Find the course by courseId
        const course = await Course.findById(courseId);

        // Check if the course exists
        if (!course) {
            return res.status(404).json({ message: 'No course found for this courseId' });
        }

        // Find or create a UserCourse document
        let userCourse = await UserCourse.findOne({ email });

        if (!userCourse) {
            userCourse = new UserCourse({ email, courseIds: [courseId] });
        } else {
            // Add the courseId to the courseIds array if it doesn't already exist
            if (!userCourse.courseIds.includes(courseId)) {
                userCourse.courseIds.push(courseId);
            }
        }

        // Save the updated UserCourse document
        await userCourse.save();

        // Send a success response
        res.status(200).json({ message: 'Enrolled successfully', userCourse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const getUserCourse_Controller = async (req, res) => {
    try {
        const { email } = req.query;

        console.log(email);  
        // Validate input
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        // Find the UserCourse document by email
        const userCourse = await UserCourse.findOne({ email });

        // Check if the userCourse exists
        if (!userCourse) {
            return res.status(404).json({ message: 'No courses found for this email' });
        }

        // Fetch detailed course information for each courseId
        const courses = await Promise.all(
            userCourse.courseIds.map(courseId => Course.findById(courseId))
        ); 

        res.status(200).json({courses}); 

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};  

// ...................................................................../// 
// ...................................................................//// 
///...................................................................../// 

// Function to generate a random duration in hours and minutes
const getRandomDuration = () => {
    const hours = Math.floor(Math.random() * 5); // Random hours between 0 and 4
    const minutes = Math.floor(Math.random() * 60); // Random minutes between 0 and 59
    return `${hours}h ${minutes}m`;
};

// Function to generate a random rating between 1 and 4
const getRandomRating = () => {
    return (Math.random() * (4 - 1) + 1).toFixed(1); // Random rating with 1 decimal place
};

// Predefined image URLs
const imageUrls = [
    'https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png',
    'https://keeplearningeducation.com.au/wp-content/uploads/2021/12/communication-courses-Best.jpg',
    'https://wallpapercave.com/wp/wp9775513.jpg',
    'https://wallpapercave.com/wp/wp9775513.jpg',
    'https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png '
]

// Function to get a random image from the predefined set
const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
};

export const getAllCourse = async (req, res) => {
    try {
        const courses = await Course.find({}, { courseName: 1, _id: 1, price: 1 });

        // Add random courseDuration, rating, and image to each course
        const updatedCourses = courses.map(course => ({
            ...course._doc,
            courseDuration: getRandomDuration(),
            rating: getRandomRating(),
            image: getRandomImage()
        }));

        res.status(200).json(updatedCourses);
        console.log(updatedCourses);  
        
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
}; 

export const getAllcourseName = async (req, res) => {
    try {
        // Query the Course model and select specific fields
        const courses = await Course.find({}, 'courseName authorName _id');

        // Send the results as a response
        res.status(200).json(courses);
    } catch (error) {
        // Handle any errors
        console.error(error);
        res.status(500).json({ message: 'An error occurred while retrieving courses.' });
    }
}; 

export const getOneCourse = async (req, res) => {
    try {
        // Extract course ID from the request parameters
        const { id } = req.params;
        
        // Find the course by its ID
        const course = await Course.findById(id);

        console.log(course); 
        // Check if the course exists
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Send the course details as a response
        res.status(200).json(course);
    } catch (error) {
        // Handle any errors that occur during the process
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};