// src/pages/Dashboard.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  // Static example data instead of user auth
  const [coins] = useState(120); // example coin balance
  const [progress] = useState(70); // example progress
  const [profile] = useState({
    displayName: "Guidance Guru User",
    email: "user@example.com",
    achievements: ["Completed React Basics", "JavaScript Mastery", "Full-Stack Bootcamp"],
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Welcome Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <div className="mt-4 sm:mt-0 text-center sm:text-right">
            <p className="text-gray-600">Welcome, {profile.displayName}</p>
            <p className="text-gray-600">{profile.email}</p>
          </div>
        </div>

        {/* Coin Balance */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-yellow-600">Coin Balance</h2>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {coins} 🪙
          </motion.p>
        </div>

        {/* Progress Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-blue-600">Your Learning Progress</h2>
          <div className="mt-4 bg-gray-200 rounded-full h-6 w-full">
            <div
              className="bg-blue-500 h-6 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-gray-600">{progress}% Completed</p>
        </div>

        {/* Recommended Courses */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-green-600">Recommended Courses</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>React.js Fundamentals</li>
            <li>Advanced JavaScript Techniques</li>
            <li>Full-Stack Development Bootcamp</li>
          </ul>
        </div>

        {/* Achievements */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-purple-600">Your Achievements</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {profile.achievements.length > 0 ? (
              profile.achievements.map((ach, index) => (
                <motion.div
                  key={index}
                  className="bg-yellow-100 p-4 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-center font-semibold">{ach}</p>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-600">No achievements yet. Complete courses to unlock badges!</p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
