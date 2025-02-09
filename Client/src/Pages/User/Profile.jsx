import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUserData } from "../../Redux/Slices/AuthSlice";

function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state) => state?.auth?.data);

    async function handleCancellation() {
        toast("Initiating cancellation...");
        await dispatch(cancelCourseBundle());
        await dispatch(getUserData());
        toast.success("Subscription cancelled!");
        navigate("/");
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6">
            <div className="bg-white/10 backdrop-blur-md border border-gray-700 shadow-lg rounded-2xl p-6 w-full max-w-md text-center relative">
                {/* Avatar */}
                <div className="flex flex-col items-center">
                    <img
                        src={userData?.avatar?.secure_url}
                        alt="User Avatar"
                        className="w-32 h-32 rounded-full border-4 border-yellow-500 shadow-lg hover:scale-105 transition"
                    />
                    <h3 className="text-2xl font-semibold mt-3 capitalize text-yellow-400">
                        {userData?.fullName}
                    </h3>
                    <p className="text-gray-300 text-sm">{userData?.email}</p>
                </div>

                {/* User Details */}
                <div className="mt-5 bg-gray-800/50 p-4 rounded-lg text-lg">
                    <div className="flex justify-between py-1">
                        <span className="text-yellow-300">Role:</span>
                        <span className="capitalize">{userData?.role}</span>
                    </div>
                    <div className="flex justify-between py-1">
                        <span className="text-yellow-300">Subscription:</span>
                        <span className={userData?.subscription?.status === "active" ? "text-green-400" : "text-red-400"}>
                            {userData?.subscription?.status === "active" ? "Active" : "Inactive"}
                        </span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-col gap-3">
                    <Link 
                        to="/changepassword" 
                        className="bg-blue-600 hover:bg-blue-500 transition-all rounded-lg font-semibold py-2 text-lg shadow-md">
                        Change Password
                    </Link>
                    <Link 
                        to="/user/editprofile" 
                        className="bg-green-600 hover:bg-green-500 transition-all rounded-lg font-semibold py-2 text-lg shadow-md">
                        Edit Profile
                    </Link>
                    {userData?.subscription?.status === "active" && (
                        <button 
                            onClick={handleCancellation} 
                            className="bg-red-600 hover:bg-red-500 transition-all rounded-lg font-semibold py-2 text-lg shadow-md">
                            Cancel Subscription
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;
