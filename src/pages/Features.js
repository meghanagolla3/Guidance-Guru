import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800">🌟 Features of Guidance Guru</h1>
        <p className="text-lg text-gray-600 mt-4">
          Our platform provides the best learning experience with AI-driven features.
        </p>
        
        <ul className="list-disc ml-6 mt-4 text-gray-700 text-left">
          <li>🔹 **AI-Powered Resume & Portfolio Builder**</li>
          <li>🔹 **AI-Driven Learning Path Generator**</li>
          <li>🔹 **Voice & Chat-Based AI Mentor**</li>
          <li>🔹 **Project & Hackathon Hub**</li>
          <li>🔹 **Daily Learning Challenges & Streaks**</li>
          <li>🔹 **AI-Powered Internship Finder**</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Features;
