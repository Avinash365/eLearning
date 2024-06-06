import express from "express"; 

import {login, signup, logout} from "../controllers/auth.controller.js";  
import { postCourse__controller, deleteCourse__Controller,getUserCourse_Controller } from "../controllers/course.controller.js"
const router = express.Router();  

router.post("/login", login); 
router.post("/signup",signup); 
router.post("/logout",logout);   

router.post("/getCourese",getUserCourse_Controller ) 
router.post("/create", postCourse__controller);
router.post("/delete", deleteCourse__Controller)
export default router; 

