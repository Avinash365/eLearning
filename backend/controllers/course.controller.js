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
            courseDiscription,
            courseDetails, 
            lessons, 
            courseLanguage, 
            timeTakenToComplete 
        } = req.body; 

        // Validate required fields
        if (!courseName || !courseUrl || !courseDetails || !lessons || !courseLanguage || !timeTakenToComplete || !courseDiscription) {
            return res.status(400).json({ error: 'Please Provide All Information' }); 
        }

        // Create new course instance 
        const newCourse = new Course({ 
            email,
            courseName, 
            courseUrl,  
            courseDiscription,
            courseDetails, 
            lessons, 
            courseLanguage, 
            timeTakenToComplete
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
            email: newCourse.email,
            courseName: newCourse.courseName, 
            courseUrl: newCourse.courseUrl,  
            courseDiscription:newCourse.courseDiscription, 
            courseDetails: newCourse.courseDetails, 
            lessons: newCourse.lessons, 
            courseLanguage: newCourse.courseLanguage, 
            timeTakenToComplete: newCourse.timeTakenToComplete
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
        console.log(req.body)
        const course = await CourseModel.findOneAndDelete({ _id: _id });
        console.log("submit");
        return res.status(200).json({
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

        // Send a success response with the detailed course information
        res.status(200).json({courses});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};