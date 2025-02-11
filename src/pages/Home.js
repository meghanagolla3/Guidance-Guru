import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-6 text-center max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-gray-800">🚀 Welcome to Guidance Guru</h1>
        <p className="text-lg text-gray-600 mt-4">
          Your AI-powered skill development platform for students and professionals.
        </p>

        <Link to="/questionnaire">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-lg shadow-md hover:shadow-lg transition"
          >
            Start Learning Now
          </motion.button>
        </Link>

        <div className="mt-8 text-left">
          <h2 className="text-2xl font-semibold text-gray-700">✨ Why Choose Guidance Guru?</h2>
          <ul className="list-disc ml-6 mt-3 text-gray-600">
            <li>🎯 AI-powered Learning Paths tailored for you</li>
            <li>📚 Personalized Course & Project Recommendations</li>
            <li>🚀 Hands-on Project-Based Learning</li>
            <li>🔍 Internship & Job Opportunities</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
