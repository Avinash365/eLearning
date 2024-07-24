import mongoose from "mongoose";

const { Schema } = mongoose;

// Define the Lesson schema
const LessonSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true // Remove extra spaces from title
  },
  description: {
    type: String,
    required: true,
    trim: true // Remove extra spaces from description
  }
});

// Define the Course schema
const CourseSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true, // Convert email to lowercase before saving
    trim: true // Remove extra spaces from email
  },
  courseName: {
    type: String,
    required: true,
    trim: true // Remove extra spaces from courseName
  },
  courseUrl: {
    type: String,
    required: true,
    trim: true // Remove extra spaces from courseUrl
  },
  courseDiscription: {
    type: String,
    trim: true // Remove extra spaces from courseDescription
  },
  courseDetails: {
    type: String,
    trim: true // Remove extra spaces from courseDetails
  },
  lessons: [LessonSchema],
  coursePrice: {
    type: String,
    trim: true // Remove extra spaces from coursePrice
  },
  timeTakenToComplete: {
    type: String, // Assuming time is in hours, you can change the type based on your requirement
    required: true,
    trim: true // Remove extra spaces from timeTakenToComplete
  },
  courseLevel: {
    type: String,
    trim: true // Remove extra spaces from courseLevel
  },
  price: {
    type: String,
    trim: true // Remove extra spaces from price
  },
  authorName: {
    type: String,
    trim: true // Remove extra spaces from authorName
  }
}, { timestamps: true });

// Create the Course model
const Course = mongoose.model('Course', CourseSchema);

export default Course;
