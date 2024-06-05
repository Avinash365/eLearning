import CourseModel from "../models/CourseModel.js";


export const postCourse__controller = async (req, res, next) => {
    try {
        const { courseDescription, courseName, courseEmail, courseUrl } = req.body;

        if (!courseDescription || !courseName || !courseEmail) {
            return res.status(400).json({
                error: "Please Provide All Information",
            });
        }

       
        //console.log(pic.secure_url)

        //const url = req.protocol + "://" + req.get("host");
        console.log(req.body);
        const course = new CourseModel({
            courseDescription,
            courseName,
            courseEmail,
            courseUrl,
            
        });
       await course.save();
        res.status(201).json({
            _id: course._id,
            courseName: course.courseName,
            courseEmail: course.courseEmail,
            courseUrl: course.courseUrl,
            courseDescription: course.courseDescription
        }); 
        console.log("Done")
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Something went wrong",
        });
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