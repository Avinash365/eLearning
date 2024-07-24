import express from "express";  

import { postCourse__controller,deleteCourse__Controller, courseEnrolment_Controller, getUserCourse_Controller, getAllCourse, getAllcourseName, getOneCourse} from "../controllers/course.controller.js";

const router = express.Router();  

router.post('/create_course',postCourse__controller); 
router.post('/enrol_course',courseEnrolment_Controller);  

router.get('/user_courses', getUserCourse_Controller); 
router.get('/get',getUserCourse_Controller);   
router.get('/courses',getAllCourse)   

router.get('/one/:id', getOneCourse);

router.get('/courseList', getAllcourseName); 

router.delete('/delete_course', deleteCourse__Controller);  


 
export default router; 

