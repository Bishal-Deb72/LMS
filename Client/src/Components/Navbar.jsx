import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"
import { logout } from '../Redux/Slices/AuthSlice.js';


const Navbar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // for checking if user is logged in or not
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)

  // for disolaying the option acc to role
  const role = useSelector((state) => state?.auth?.role)
  // State to manage dropdown visibility
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    const res = await dispatch(logout())
    if(res?.payload?.success)
    navigate("/")
  }

  return (
    <nav className="bg-gray-900 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Navigation Links */}
        <div className="flex items-center space-x-4 p-1 gap-5 ">
          <h1 className="text-3xl font-bold">LearnX</h1>
          <ul className="hidden md:flex space-x-6 font-serif ">
            {/* Courses Dropdown */}
            <li>
              <Link to="/courses" className="hover:text-gray-400 hover:underline">
                Courses
              </Link>
              
            </li>
            {isLoggedIn && role === "ADMIN" && (
              <li>
              <Link to="/admin/dashboard">Admin DashBoard</Link>
            </li>
            
            )}
            {isLoggedIn && role === "ADMIN" && (
              <li>
              <Link to="/course/create">Create new course</Link>
            </li>
            
            )}
            <li>
              <Link to='/community' className='hover:text-gray-400 hover:underline'>Community</Link>
            </li>
            <li>
              <Link to='/resources' className='hover:text-gray-400 hover:underline'>Resources</Link>
            </li>
            
            <li>
              <Link to='/dashboard' className='hover:text-gray-400 hover:underline'>Dashboard</Link>
            </li>
          </ul>
        </div>

        {/* Sign In / Sign Up Buttons */}
        {!isLoggedIn && (
          <div className="flex items-center space-x-4 font-serif">
          <button className="hidden md:block px-4 py-2 text-white rounded hover:opacity-75 hover:bg-gray-700 cursor-pointer">
            <Link to='/login'>Log In</Link>
            
          </button>
          <button className="hidden md:block px-4 py-2 text-white rounded hover:opacity-75 hover:bg-gray-700 cursor-pointer">
          <Link to='/signup'>Sign Up</Link>
            
          </button>
          <button className="md:hidden text-2xl focus:outline-none">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        )}

        {isLoggedIn && (
          <div className="flex items-center space-x-4 font-serif">
          <button className="hidden md:block px-4 py-2 text-white rounded hover:opacity-75 hover:bg-gray-700 cursor-pointer">
            <Link to='/user/profile'>Profile</Link>
            
          </button>
          <button className="hidden md:block px-4 py-2 text-white rounded hover:opacity-75 hover:bg-gray-700 cursor-pointer">
          <Link onClick={handleLogout}>Logout</Link>
            
          </button>
          <button className="md:hidden text-2xl focus:outline-none">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
