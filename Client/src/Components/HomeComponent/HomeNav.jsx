import React, { useState } from "react";
import { FaSearch, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const HomeNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  console.log('HomeNav is rendering');

  return (
    <nav className="bg-opacity-60 bg-gray-900 backdrop-blur-lg text-white shadow-lg fixed top-0 left-0 w-full z-50 font-serif">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          LearnX
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          {["Enrolled Courses", "Discussions", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Section: Search + User Profile */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search for Courses..."
              className="bg-gray-800 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>

          {/* User Profile */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition"
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              <FaUserCircle className="text-xl" />
              <span className="hidden md:block">Profile</span>
            </button>

            {/* Dropdown Menu */}
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg overflow-hidden animate-fadeIn">
                {["My Profile", "My Courses", "Settings", "Logout"].map((option) => (
                  <a
                    key={option}
                    href="#"
                    className={`block px-4 py-2 ${
                      option === "Logout" ? "text-red-400" : "text-gray-300"
                    } hover:bg-gray-700`}
                  >
                    {option}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 text-white py-4 flex flex-col items-center space-y-4 shadow-lg">
          {["Courses", "Instructor Dashboard", "Assignments", "Discussions", "Events"].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-2 hover:text-blue-400"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default HomeNav;
