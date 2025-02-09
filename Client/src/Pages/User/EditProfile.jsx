import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { getUserData, updateProfile } from "../../Redux/Slices/AuthSlice";

function EditProfile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state?.auth?.data);
    
    const [data, setData] = useState({
        previewImage: user?.avatar?.secure_url || "",
        fullName: user?.fullName || "",
        avatar: undefined,
        userId: user?._id
    });

    function handleImageUpload(e) {
        const uploadedImage = e.target.files[0];
        if (uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.onload = () => {
                setData({
                    ...data,
                    previewImage: fileReader.result,
                    avatar: uploadedImage
                });
            };
        }
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!data.fullName || !data.avatar) {
            toast.error("All fields are mandatory");
            return;
        }
        if (data.fullName.length < 5) {
            toast.error("Name must be at least 5 characters long");
            return;
        }

        const formData = new FormData();
        formData.append("fullName", data.fullName);
        formData.append("avatar", data.avatar);

        await dispatch(updateProfile([data.userId, formData]));
        await dispatch(getUserData());

        navigate("/user/profile");
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4">
            <form
                onSubmit={onFormSubmit}
                className="bg-gray-800/80 backdrop-blur-lg shadow-lg rounded-xl p-6 w-full max-w-md text-center"
            >
                <h1 className="text-2xl font-semibold text-yellow-400 mb-4">Edit Profile</h1>

                {/* Profile Picture Upload */}
                <label className="cursor-pointer relative block w-32 h-32 mx-auto">
                    {data.previewImage ? (
                        <img 
                            className="w-32 h-32 rounded-full border-4 border-yellow-500 shadow-lg hover:scale-105 transition"
                            src={data.previewImage}
                            alt="Profile Preview"
                        />
                    ) : (
                        <BsPersonCircle className="w-32 h-32 text-gray-400 mx-auto" />
                    )}
                    <input
                        onChange={handleImageUpload}
                        type="file"
                        className="hidden"
                        accept=".jpg, .png, .jpeg"
                    />
                </label>

                {/* Full Name Input */}
                <div className="mt-5 text-left">
                    <label className="block text-lg font-medium text-gray-300">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your name"
                        value={data.fullName}
                        onChange={handleInputChange}
                        className="mt-1 w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    />
                </div>

                {/* Update Button */}
                <button 
                    type="submit"
                    className="mt-6 w-full bg-yellow-600 hover:bg-yellow-500 transition-all py-3 text-lg font-semibold rounded-lg shadow-md"
                >
                    Update Profile
                </button>

                {/* Go Back Link */}
                <Link to="/user/profile" className="mt-4 inline-flex items-center text-yellow-400 hover:text-yellow-300 transition">
                    <AiOutlineArrowLeft className="mr-2" /> Back to Profile
                </Link>
            </form>
        </div>
    );
}

export default EditProfile;
