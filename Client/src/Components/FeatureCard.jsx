import React from "react";
import { FaBook, FaChalkboardTeacher, FaChartBar, FaCertificate } from "react-icons/fa"; // Importing LMS-specific icons

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gray-800 text-white rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-700 w-full sm:w-80">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
        <Icon className="text-white text-3xl" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    { icon: FaBook, title: "Course Management", description: "Easily create, update, and organize courses with structured content." },
    { icon: FaChalkboardTeacher, title: "Live Classes", description: "Engage students with interactive live classes and Q&A sessions." },
    { icon: FaChartBar, title: "Progress Tracking", description: "Monitor student performance with real-time analytics and reports." },
    { icon: FaCertificate, title: "Certification", description: "Award certificates upon course completion to recognize achievements." },
  ];

  return (
    <div className="py-16 bg-gray-300 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
