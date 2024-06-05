import mongoose from "mongoose";

const { Schema } = mongoose;

const userCourseSchema = new Schema({
    email: {  // Corrected the typo from 'eamil' to 'email'
        type: String,
        required: true, // Corrected 'require' to 'required'
        lowercase: true,
        trim: true
    },
    courseIds: [{  // Changed 'courseId' to 'courseIds' and added a type to the array
        type: Schema.Types.ObjectId, // Assuming courseId refers to an ObjectId from another collection
        ref: 'Course'  // Referencing the 'Course' collection (adjust if your collection name is different)
    }]
});
const UserCourse = mongoose.model('UserCourse',userCourseSchema); 

export default UserCourse; 
