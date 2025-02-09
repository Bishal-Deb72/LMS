import {Router} from "express"


import {authorizedRoles, isLoggedIn} from "../middlewares/auth.middlewares.js"
import { getAllCourse, getLectureByCourseId,createCourse, updateCourse, removeCourse, addLectureToCourseById} from "../Controllers/course.controller.js"
import upload from "../middlewares/multer.middleware.js"


const router = Router()

router.route('/')
    .get(getAllCourse)
    .post(
        isLoggedIn,
        authorizedRoles('ADMIN'),
        upload.single('thumbnail'),
        createCourse
    )
    

router.route('/:id')
    .get(isLoggedIn,getLectureByCourseId)
    .put(
        isLoggedIn,
        authorizedRoles('ADMIN'),
        updateCourse
    )
    .delete(
        isLoggedIn,
        authorizedRoles('ADMIN'),
        removeCourse
    )
    .post(
        isLoggedIn,
        authorizedRoles('ADMIN'),
        upload.single('lecture'),
        addLectureToCourseById
    )

export default router;    