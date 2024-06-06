import mongoose from "mongoose";

const { Schema } = mongoose;

// Define the Lesson schema
const LessonSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// Define the Course schema
const CourseSchema = new Schema({ 
    email:{
        type: String,
        required: true,
        lowercase: true, // Convert email to lowercase before saving
        trim: true // Remove extra spaces from email
    }, 
  courseName: {
    type: String,
    required: true
  },
  courseUrl: {
    type: String,
    required: true
  },
  courseDiscription:{
    type:'String', 
    required:true
  },
  courseDetails: {
    type: String,
    required: true
  },
  lessons: [LessonSchema], 
  courseLanguage: {
    type: String,
    required: true
  },
  timeTakenToComplete: {
    type: Number,  // Assuming time is in hours, you can change the type based on your requirement
    required: true
  }
},{ timestamps: true });

// Create the Course model
const Course = mongoose.model('Course', CourseSchema);

export default Course; 
