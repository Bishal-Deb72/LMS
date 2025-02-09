import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa"; 

const Denied = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white px-4 font-serif">
      {/* Warning Icon & Heading */}
      <div className="flex flex-col items-center justify-center p-28 pb-2">
        <FaExclamationTriangle className="text-6xl text-red-500 animate-pulse" />
        <h1 className="text-5xl font-bold mt-4 text-gray-400">Access Denied</h1>
      </div>

      {/* Subheading */}
      <p className="text-lg text-gray-400 text-center mt-4 max-w-2xl">
        You don't have permission to view this page. If you believe this is a mistake, please contact support.
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

export default Denied;
