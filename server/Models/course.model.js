import {model,Schema} from "mongoose"

const courseSchema = new Schema({

    title:{
        type:String,
        required:[true,'Title is required'],
        minLength:[5,'Title must be atleast 5 character'],
        maxLength:[59,'Title must not be more than 59 character'],
        trim:true
    },
    description:{
        type:String,
        required:[true,'Description is required'],
        minLength:[8,'Description must be atleast 8 character'],
        maxLength:[200,'Description must not be more than 200 character'],
    },
    category:{
        type:String,

    },
    thumbnail:{
        public_id:{
            type:String
        },
        secure_url:{
            type:String
        }
    },
    lectures:[
        {
            title:{
                type:String,
                description:String,
                lecture:{
                    public_id:{
                        type:String,
                        required:true

                    },
                    secure_url:{
                       type:String,
                       required:true
                    }
                }
            }    

        }
    ],
    numberOfLectures:{
        type:Number,
        default:0
    },
    createdBy:{
        type:String,
        required:true
    }


},{timestamps:true});

const Course = model('Course',courseSchema)

export default Course;