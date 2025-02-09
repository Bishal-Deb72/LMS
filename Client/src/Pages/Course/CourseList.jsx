import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../../Components/CourseCard";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";

function CourseList() {
    const dispatch = useDispatch();
    const { courseData } = useSelector((state) => state.course);

    useEffect(() => {
        dispatch(getAllCourses());
    }, [dispatch]);

    return (
        <div className="min-h-screen pt-12 px-8 text-white bg-gray-900 mb-0">
            <h1 className="text-center text-4xl font-bold mb-10 text-yellow-400">
                Explore Courses by <span className="text-white">Industry Experts</span>
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
                {courseData?.length > 0 ? (
                    courseData.map((course) => <CourseCard key={course._id} data={course} />)
                ) : (
                    <p className="text-center text-gray-400 col-span-full">
                        No courses available at the moment.
                    </p>
                )}
            </div>
        </div>
    );
}

export default CourseList;
