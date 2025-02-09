import Course from "../Models/course.model.js"
import AppError from "../Utils/error.utils.js";
import fs from "fs/promises"
import cloudinary from "cloudinary"


const getAllCourse = async function (req,res,next){
    try {
        const courses = await Course.find({}).select('-lectures');
    
        res.status(200).json({
            success:true,
            message:'All Courses',
            courses,
        })
    } catch (e) {
        return next(
            new AppError(e.message,500)
        )
    }
}

const getLectureByCourseId = async function(req,res,next){
    try {
        const {id} = req.params;
        const course = await Course.findById(id);

        if(!course){
            return next (
                new AppError('Course not found',404)
            )
        }

        res.status(200).json({
            success:true,
            message:'Course lectures fetched successfully',
        })
        
    } catch (e) {
        return next(
            new AppError(e.message,500))
    }
}

const createCourse = async  (req,res,next) => {
    try {
        const {title,description, category, createdBy} = req.body;
        if(!title || !description || !category || !createdBy){
            return next(
                new AppError('Please fill all fields',400)
            )
        }
        const course = await Course.create({
            title,
            description,
            category,
            createdBy,
            thumbnail:{
                public_id:"dumy",
                secure_url:"dumy"
            }
        });
    
        if(!course){
            return next(
                new AppError('Course not created',500)
            )
        }
    
        if(req.body){
           try {
                const result = await cloudinary.v2.uploader.upload(req.file.path,{
                 folder: 'lms',
                });
                if(result){
                    course.thumbnail.public_id = result.public_id;
                    course.thumbnail.secure_url = result.secure_url;
                }
     
                fs.rm(`uploads/${req.file.filename}`)

           } catch (e) {
             return next(
                new AppError(e.message,500)
                )
           }
        }
    
        await course.save();
        res.status(200).json({
            success:true,
            message:'Course created successfully',
            course,
        })
    } catch (e) {
        return next(
            new AppError(e.message,500)
        )
        
        
    }
}

const updateCourse = async (req,res,next)=>{
    try {
        const {id} = req.params;
        const course = await Course.findByIdAndUpdate(
            id,
            {
                $set:req.body
            },
            {
                runValidator:true
            }
        );

        if(!course){
            return next(
                new AppError('course with given id not exist',500)
            ) 
        }

        res.status(200).json({
            success:true,
            message:'Course updated successfully',
            course
        })

    } catch (e) {
        return next(
            new AppError(e.message,500)
        )
    }
}

const removeCourse = async (req,res,next)=>{
    try {
        const {id} = req.params;
        const course = await Course.findById(id);

        if(!course){
            return next(
                new AppError('course with given id not exist',500)
            )    
        }

        await Course.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:'Course deleted successfully',
        })
        
    } catch (e) {
        return next(
            new AppError(e.message,500)
        )
    }
}

const addLectureToCourseById = async (req,res,next) => {
    try {
        const { title, description} = req.body;
        const { id } = req.params;
    
        if(!title || !description){
            return next(
                new AppError('Please provide title and description',400)
            )
        }
    
        const course = await Course.findById(id);
        if(!course){
            return next(new AppError('Course with given id not exist',500))
        }
    
        const lectureData = {
            title,
            description,
            lecture:{}
        }
    
        if(req.file){
            try {
                const result = await cloudinary.v2.uploader.upload(req.file.path,{
                 folder: 'lms',
                });
                if(result){
                    lectureData.lecture.public_id = result.public_id;
                    lectureData.lecture.secure_url = result.secure_url;
                }
     
                fs.rm(`uploads/${req.file.filename}`)
    
           } catch (e) {
             return next(
                new AppError(e.message,500)
            )
           }
        }
    
        course.lectures.push(lectureData);
        course.numberOfLectures = course.lectures.length;
    
        await course.save();
    
        res.status(200).json({
            success:true,
            message:'Lecture successfully added to the course',
            course
        })
    } catch (e) {
        return next(
            new AppError(e.message,500)
        )
    }

}

export{
    getAllCourse,
    getLectureByCourseId,
    createCourse,
    updateCourse,
    removeCourse,
    addLectureToCourseById
}