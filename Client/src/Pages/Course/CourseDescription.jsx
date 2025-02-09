import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function CourseDescription() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { role, data } = useSelector((state) => state.auth);

    return (
        <div className="min-h-[90vh] pt-12 px-10 flex flex-col items-center text-white bg-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 w-full max-w-6xl">

                {/* Left Section - Course Thumbnail & CTA */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6">
                    <img 
                        className="w-full h-64 object-cover rounded-lg"
                        alt="Course Thumbnail"
                        src={state?.thumbnail?.secure_url}
                    />

                    <div className="text-center">
                        <p className="font-semibold text-xl text-yellow-500">Total Lectures: {state?.numberOfLectures}</p>
                        <p className="font-semibold text-lg text-gray-300">Instructor: {state?.createdBy}</p>
                    </div>

                    {/* Action Buttons */}
                    {role === "ADMIN" || data?.subscription?.status === "active" ? (
                        <button 
                            onClick={() => navigate("/course/displaylectures", { state: { ...state } })} 
                            className="w-full bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer"
                        >
                            🎥 Watch Lectures
                        </button>
                    ) : (
                        <button 
                            onClick={() => navigate("/checkout")} 
                            className="w-full bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer"
                        >
                            🚀 Subscribe Now
                        </button>
                    )}
                </div>

                {/* Right Section - Course Details */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-center">
                    <h1 className="text-4xl font-bold text-yellow-500 mb-5 text-center">
                        {state?.title}
                    </h1>

                    <div className="space-y-4">
                        {/* Course Description */}
                        <div className="flex items-start gap-3">
                            <span className="text-yellow-400 text-xl">📖</span>
                            <div>
                                <p className="text-yellow-400 text-lg font-semibold">Course Description:</p>
                                <p className="text-gray-300 leading-relaxed">{state?.description}</p>
                            </div>
                        </div>

                        {/* Total Lectures */}
                        <div className="flex items-center gap-3">
                            <span className="text-green-400 text-xl">🎥</span>
                            <p className="text-gray-300"><span className="font-semibold text-green-400">Total Lectures:</span> {state?.numberOfLectures}</p>
                        </div>

                        {/* Instructor Info */}
                        <div className="flex items-center gap-3">
                            <span className="text-blue-400 text-xl">👨‍🏫</span>
                            <p className="text-gray-300"><span className="font-semibold text-blue-400">Instructor:</span> {state?.createdBy}</p>
                        </div>

                        {/* Difficulty Level (Optional) */}
                        {state?.difficulty && (
                            <div className="flex items-center gap-3">
                                <span className="text-red-400 text-xl">📊</span>
                                <p className="text-gray-300"><span className="font-semibold text-red-400">Difficulty:</span> {state?.difficulty}</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CourseDescription;
