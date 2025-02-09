import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { createAccount } from '../Redux/Slices/AuthSlice';
import { useDispatch } from 'react-redux';

const Signup = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    avatar: ""
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value
    });
  };

  const [previewImage, setPreviewImage] = useState("");

  const getImage = (event) => {
    event.preventDefault();
    const uploadedImage = event.target.files[0];
    if (uploadedImage) {
      setSignupData({
        ...signupData,
        avatar: uploadedImage
      });
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(uploadedImage);
    fileReader.addEventListener("load", function () {
      setPreviewImage(this.result);
    });
  };

  const createNewAccount = async (e) => {
    e.preventDefault();
    if(!signupData.fullName || !signupData.avatar || !signupData.email || !signupData.password) {
        toast.error("Please fill in all fields");
        return;
    }
    if(signupData.fullName.length < 3){
        toast.error("Name should atleast 3 character")
        return;

    }

    if(!signupData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        toast.error("Invalid Email");
    }
    
    if(!signupData.password.match( /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
        toast.error("Password should be 8-16 character long with atleast a number and a special character and one uppercase & lowercase");
    }

    const formData = new FormData();
    formData.append("fullName",signupData.fullName);
    formData.append("email",signupData.email);
    formData.append("password",signupData.password);
    formData.append("avatar",signupData.avatar);

    // dispatch create account action

    const response = await dispatch(createAccount(formData))
    if(response?.payload?.success){
        console.log("response >>>",response.payload)

        navigate("/")
    }

    
    setSignupData({
        fullName:"",
        email:"",
        password:"",
        avatar:""
    })

    setPreviewImage("")

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 font-serif">
      <div className="bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-md border border-gray-700">
        <form noValidate className="mt-6 w-full" onSubmit={createNewAccount}>
          <div className="flex justify-center mb-4">
            <label htmlFor="image_upload" className="cursor-pointer">
              {previewImage ? (
                <img className="w-24 h-24 rounded-full m-auto" src={previewImage} alt="Preview" />
              ) : (
                <BsPersonCircle className="w-20 h-24 rounded-full m-auto" />
              )}
            </label>
            <input 
              onChange={getImage}
              className="hidden"
              type="file"
              name="image_upload"
              id="image_upload"
              accept=".jpg, .jpeg, .png, .svg"
            />
          </div>
          <h1 className="text-5xl font-extrabold text-center text-blue-400">Sign Up</h1>
          <p className="text-lg text-gray-300 text-center mt-2">Create an account to get started</p>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={signupData.fullName}
            onChange={handleUserInput}
            className="w-full p-3 rounded-lg bg-gray-700 text-white mb-4 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signupData.email}
            onChange={handleUserInput}
            className="w-full p-3 rounded-lg bg-gray-700 text-white mb-4 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signupData.password}
            onChange={handleUserInput}
            className="w-full p-3 rounded-lg bg-gray-700 text-white mb-4 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 text-lg font-bold shadow-md"
          >
            Create Account
          </button>
        </form>
        <p className="mt-6 text-gray-300 text-center">
          Already have an account? <Link to="/login" className="text-blue-400 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
