import express from "express"; 
import {login, signup, logout} from "../controllers/auth.controller.js";  
import { postCourse__controller, deleteCourse__Controller } from "../controllers/courseController.js"
const router = express.Router();  

router.post("/login", login); 
router.post("/signup",signup); 
router.post("/logout",logout); 
router.post("/create", postCourse__controller);
router.post("/delete", deleteCourse__Controller)
export default router; 

