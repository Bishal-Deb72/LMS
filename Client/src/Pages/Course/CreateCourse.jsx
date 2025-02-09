import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createNewCourse } from "../../Redux/Slices/CourseSlice";

function CreateCourse() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        title: "",
        category: "",
        createdBy: "",
        description: "",
        thumbnail: null,
        previewImage: ""
    });

    function handleImageUpload(e) {
        const uploadedImage = e.target.files[0];
        if (uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setUserInput({
                    ...userInput,
                    previewImage: this.result,
                    thumbnail: uploadedImage
                });
            });
        }
    }

    function handleUserInput(e) {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    }

    async function onFormSubmit(e) {
        e.preventDefault();

        if (!userInput.title || !userInput.description || !userInput.category || !userInput.thumbnail || !userInput.createdBy) {
            toast.error("All fields are mandatory");
            return;
        }

        const response = await dispatch(createNewCourse(userInput));
        if (response?.payload?.success) {
            setUserInput({
                title: "",
                category: "",
                createdBy: "",
                description: "",
                thumbnail: null,
                previewImage: ""
            });
            navigate("/courses");
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-12">
            <form
                onSubmit={onFormSubmit}
                className="flex flex-col justify-center gap-6 bg-white/10 backdrop-blur-lg border border-gray-700 p-8 rounded-2xl shadow-lg w-full max-w-2xl relative"
            >
                {/* Back Button */}
                <Link to="/courses" className="absolute top-4 left-4 text-2xl text-yellow-400 cursor-pointer hover:scale-110 transition-all">
                    <AiOutlineArrowLeft />
                </Link>

                <h1 className="text-center text-3xl font-bold text-yellow-400">
                    🚀 Create New Course
                </h1>

                {/* Course Thumbnail Upload */}
                <div className="flex flex-col items-center">
                    <label htmlFor="image_uploads" className="cursor-pointer w-full">
                        {userInput.previewImage ? (
                            <img
                                className="w-full h-48 object-cover rounded-lg shadow-md border border-gray-600 hover:opacity-80 transition"
                                src={userInput.previewImage}
                                alt="Course Thumbnail"
                            />
                        ) : (
                            <div className="w-full h-48 flex items-center justify-center bg-gray-800 border border-gray-600 rounded-lg shadow-md text-gray-400 text-lg font-semibold hover:bg-gray-700 transition">
                                📸 Click to Upload Course Thumbnail
                            </div>
                        )}
                    </label>
                    <input
                        className="hidden"
                        type="file"
                        id="image_uploads"
                        accept=".jpg, .jpeg, .png"
                        onChange={handleImageUpload}
                    />
                </div>

                {/* Course Details */}
                <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-semibold text-yellow-400" htmlFor="title">
                            📌 Course Title
                        </label>
                        <input
                            required
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Enter course title"
                            className="bg-gray-800 text-white px-4 py-2 border border-gray-600 rounded-lg focus:border-yellow-400 outline-none"
                            value={userInput.title}
                            onChange={handleUserInput}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-lg font-semibold text-blue-400" htmlFor="createdBy">
                                👨‍🏫 Instructor
                            </label>
                            <input
                                required
                                type="text"
                                name="createdBy"
                                id="createdBy"
                                placeholder="Enter instructor name"
                                className="bg-gray-800 text-white px-4 py-2 border border-gray-600 rounded-lg focus:border-blue-400 outline-none"
                                value={userInput.createdBy}
                                onChange={handleUserInput}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-lg font-semibold text-green-400" htmlFor="category">
                                🏷️ Category
                            </label>
                            <input
                                required
                                type="text"
                                name="category"
                                id="category"
                                placeholder="Enter course category"
                                className="bg-gray-800 text-white px-4 py-2 border border-gray-600 rounded-lg focus:border-green-400 outline-none"
                                value={userInput.category}
                                onChange={handleUserInput}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-semibold text-red-400" htmlFor="description">
                            📝 Course Description
                        </label>
                        <textarea
                            required
                            name="description"
                            id="description"
                            placeholder="Enter course description"
                            className="bg-gray-800 text-white px-4 py-2 border border-gray-600 rounded-lg h-28 resize-none focus:border-red-400 outline-none"
                            value={userInput.description}
                            onChange={handleUserInput}
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-xl rounded-lg font-bold px-6 py-3 hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
                >
                    🚀 Create Course
                </button>
            </form>
        </div>
    );
}

export default CreateCourse;
