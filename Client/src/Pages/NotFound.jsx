import React from "react";
import { Link } from "react-router-dom";


const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white px-4 font-serif">
      {/* 404 Heading */}
      <div className="flex items-center justify-center p-28 pb-2">
        <h1 className="text-6xl font-bold text-center animate-pulse">
          <span className="text-red-500 inline-block animate-bounce">404</span>
          <br />
          <span className="text-gray-400 inline-block">Page Not Found</span>
        </h1>
      </div>

      {/* Subheading */}
      <p className="text-lg text-gray-400 text-center mt-4 max-w-2xl animate-fadeIn">
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Go Back Home
      </Link>

      
    </div>
  );
};

export default NotFoundPage;
