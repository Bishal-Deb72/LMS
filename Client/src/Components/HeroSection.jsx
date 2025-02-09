import React from "react";
import FeaturesSection from "./FeatureCard";
import Footer from "./Footer";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white px-4 font-serif">
      {/* Hero Section */}
      <div className="flex items-center justify-center p-28 pb-2">
        <h1 className="text-4xl md:text-6xl font-bold text-center animate-pulse">
          <span className="text-orange-500 inline-block transform transition duration-500 ease-in-out hover:scale-110 text-9xl animate-bounce">
            Upgrade
          </span>
          <span className="text-gray-400 inline-block mx-2 animate-pulse">
            Skills
          </span>
          <br />
          <span className="text-white inline-block transform transition duration-500 ease-in-out hover:scale-110 animate-bounce">
            Unlock
          </span>
          <span className="text-yellow-400 inline-block mx-2 animate-pulse">
            Opportunities
          </span>
        </h1>
      </div>

      {/* Subheading */}
      <p className="text-lg text-gray-400 text-center mt-4 max-w-2xl animate-fadeIn">
        Enhance your skills with expert-led courses, gain valuable knowledge, and open doors to new career and growth opportunities effortlessly.
      </p>

      {/* HD Image Section */}
      <div className="px-0 my-14 w-full flex justify-center">
        <img
          className="hover:shadow-2xl transition duration-300 ease-in-out w-11/12 md:w-3/4 lg:w-7/8 rounded-[3vw]  h-screen  text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 shadow-xl shadow-blue-600/50 animate-pulse"
          src="https://images.unsplash.com/photo-1526253038957-bce54e05968e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhY2h8ZW58MHx8MHx8fDA%3D" // Replace with your own image URL
          alt="Learning Platform"
        />
      </div>

      {/* Gradient Divider */}
      <div className="h-64 w-screen bg-gradient-to-b from-gray-900 via-blue-800 to-gray-300 backdrop-blur-lg"></div>

      {/* Feature Section */}
      <div className="bg-gray-300 h-auto min-w-screen mt-0 p-10 md:p-16 flex flex-col justify-center items-center text-gray-900">
        <h2 className="text-2xl md:text-4xl lg:text-3xl text-center tracking-wider leading-tight drop-shadow-lg font-bold">
        The platform to unlock your learning potential
        </h2>
        <span className="block mt-4 text-lg md:text-xl text-gray-700 max-w-2xl leading-7 font-sans text-center">
        From courses to certifications, our LMS empowers individuals and teams to grow. Designed to enhance productivity and deliver impactful learning experiences, it helps learners progress faster, gain essential skills, and stay ahead in today’s competitive world.
        </span>
      </div>

      {/* Features Section */}
      <div className="bg-gray-300 py-0 min-w-screen mt-0 shadow-blue-500">
        <FeaturesSection />
      </div>

      {/* Footer */}
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 shadow-xl shadow-blue-600/50 animate-pulse w-auto">
        <Footer />
      </div>
    </div>
  );
};

export default HeroSection;
