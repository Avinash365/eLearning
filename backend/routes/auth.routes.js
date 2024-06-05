import express from "express"; 
<<<<<<< HEAD
import {login, signup, logout} from "../controllers/auth.controller.js";   


=======
import {login, signup, logout} from "../controllers/auth.controller.js";  
import { postCourse__controller, deleteCourse__Controller } from "../controllers/courseController.js"
>>>>>>> 139de296ba6ceb1f7b4b8190eab4d775b2079fb8
const router = express.Router();  

router.post("/login", login); 
router.post("/signup",signup); 
<<<<<<< HEAD
router.post("/logout",logout);  
router.post("/getCourese", )


=======
router.post("/logout",logout); 
router.post("/create", postCourse__controller);
router.post("/delete", deleteCourse__Controller)
>>>>>>> 139de296ba6ceb1f7b4b8190eab4d775b2079fb8
export default router; 

