import mongoose from "mongoose";
const { Schema } = mongoose;
const courseSchema = new Schema(
    {
        courseName: {
            type: String,
            required: true,
        },
        courseDescription: {
            type: String,
            required: true,
        },
        courseEmail: {
            type: String,
            required: true,
        },
        courseUrl: {
            type: String,
            required: true,
        },

        
    },
    {
        timestamps: true,
    }
);

const CourseModel = mongoose.model("Course", courseSchema);

export default CourseModel;