import React from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to Your Dashboard
        </h1>
        <p className="mt-4 text-gray-600">
          Track your learning progress, view recommended courses, and monitor your achievements.
        </p>
        
        {/* Progress Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-blue-600">Your Progress</h2>
          <div className="mt-4 bg-gray-200 rounded-full h-4 w-full">
            <div className="bg-blue-500 h-4 rounded-full" style={{ width: "70%" }}></div>
          </div>
          <p className="mt-2 text-gray-600">70% Completed</p>
        </div>
        
        {/* Recommended Courses Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-green-600">Recommended Courses</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>React.js Fundamentals</li>
            <li>Advanced JavaScript Techniques</li>
            <li>Full-Stack Development Bootcamp</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
