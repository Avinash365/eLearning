import express from "express";  

import { postCourse__controller,deleteCourse__Controller, courseEnrolment_Controller, getUserCourse_Controller} from "../controllers/course.controller.js";

const router = express.Router();  

router.post('/create_course',postCourse__controller);
router.get('/user_courses', getUserCourse_Controller); 
router.post('/delete_course', deleteCourse__Controller);  
router.post('/enrol_course',courseEnrolment_Controller);   
router.get('/get',getUserCourse_Controller); 

 
export default router; 

