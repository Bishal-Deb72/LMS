// src/Components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import {Link} from "react-router-dom"

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle visibility of the "Back to Top" button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">CodeSpace</h2>
          <p className="text-gray-400 mt-2">© 2025 CodeSpace. All rights reserved.</p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-wrap justify-center md:justify-start gap-8">
          {/* CodeCraft Section */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-lg font-semibold hover:text-gray-400 transition duration-300">LearnX</a>
            <div className="flex flex-col mt-2 space-y-2 text-gray-400">
              <a href="#" className="hover:text-gray-400 transition duration-300">Features</a>
              <a href="#" className="hover:text-gray-400 transition duration-300">Teams</a>
              <a href="#" className="hover:text-gray-400 transition duration-300">Pricing</a>
            </div>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-lg font-semibold hover:text-gray-400 transition duration-300">Legal</a>
            <div className="flex flex-col mt-2 space-y-2 text-gray-400">
              <a href="#" className="hover:text-gray-400 transition duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400 transition duration-300">Terms of Service</a>
              <a href="#" className="hover:text-gray-400 transition duration-300">Cookie Policy</a>
            </div>
          </div>

          {/* Connect Section */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-lg font-semibold hover:text-gray-400 transition duration-300">Connect</a>
            
            <div className="flex flex-col mt-2 space-y-2 text-gray-400">
              
              <Link to="/contact" className='hover:text-gray-400 transition duration-300'>Contact</Link>
              <a href="#" className="hover:text-gray-400 transition duration-300">Community</a>
              <a href="#" className="hover:text-gray-400 transition duration-300">Partners</a>
            </div>
          </div>

          {/* Languages Section */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-lg font-semibold hover:text-gray-400 transition duration-300">Languages</a>
            <div className="flex flex-col mt-2 space-y-2 text-gray-400">
              <a href="#" className="hover:text-gray-400 transition duration-300">C++</a>
              <a href="#" className="hover:text-gray-400 transition duration-300">Javascript</a>
              <a href="#" className="hover:text-gray-400 transition duration-300">Python</a>
            </div>
          </div>

          {/* Help Section */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-lg font-semibold hover:text-gray-400 transition duration-300">Help</a>
            <div className="flex flex-col mt-2 space-y-2 text-gray-400">
              <a href="#" className="hover:text-gray-400 transition duration-300">FAQ</a>
              <a href="#" className="hover:text-gray-400 transition duration-300">Support</a>
              <a href="#" className="hover:text-gray-400 transition duration-300">Docs</a>
            </div>
          </div>
        </div>

        {/* Right Section - Social Media Links */}
        <div className="flex gap-6 justify-center mt-6 md:mt-0">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition duration-300 transform hover:scale-110"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;