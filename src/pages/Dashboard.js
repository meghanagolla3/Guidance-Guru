// src/pages/Dashboard.js
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error: {error.message}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {user.email}!
        </h1>
        <p className="mt-2 text-gray-600">
          This is your dashboard where you can track your learning progress and
          view recommended courses.
        </p>

        {/* Progress Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-blue-600">Your Progress</h2>
          <div className="mt-4 bg-gray-200 rounded-full h-4 w-full">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
          <p className="mt-2 text-gray-600">70% Completed</p>
        </div>

        {/* Recommended Courses Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-green-600">
            Recommended Courses
          </h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>React.js Fundamentals</li>
            <li>Advanced JavaScript Techniques</li>
            <li>Full-Stack Development Bootcamp</li>
          </ul>
        </div>

        {/* Profile Details (Optional) */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-purple-600">
            Your Profile
          </h2>
          <p className="mt-2 text-gray-700">Email: {user.email}</p>
          {/* Add more profile details if needed */}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
