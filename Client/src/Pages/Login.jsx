import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { login } from '../Redux/Slices/AuthSlice';
import { useDispatch } from 'react-redux';

const Signup = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


  const [loginData, setLoginData] = useState({
    
    email: "",
    password: "",
    
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    if(!loginData.email || !loginData.password) {
        toast.error("Please fill in all fields");
        return;
    }
    

    

    // dispatch create account action

    const response = await dispatch(login(loginData))
    if(response?.payload?.success){
        console.log("response >>>",response.payload)

        navigate("/")
    }

    
    setLoginData({
       
        email:"",
        password:"",
        
    })

    

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 font-serif">
      <div className="bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-md border border-gray-700">
        <form noValidate className="mt-6 w-full" onSubmit={onLogin}>
        
          <h1 className="text-5xl font-extrabold text-center text-blue-400">Login</h1>
          <p className="text-lg text-gray-300 text-center mt-2 mb-4">Login to your account</p>
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleUserInput}
            className="w-full p-3 rounded-lg bg-gray-700 text-white mb-4 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleUserInput}
            className="w-full p-3 rounded-lg bg-gray-700 text-white mb-4 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 text-lg font-bold shadow-md"
          >
            Log In
          </button>
        </form>
        <p className="mt-6 text-gray-300 text-center">
          donot have an account? <Link to="/signup" className="text-blue-400 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
