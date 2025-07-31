import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800"> About Guidance Guru</h1>
        <p className="text-lg text-gray-600 mt-4">
          Guidance Guru is an AI-powered skill development platform designed to help students and professionals grow in their careers.
        </p>
        <h2 className="text-xl font-semibold text-gray-700 mt-6"> Our Mission</h2>
        <p className="text-md text-gray-600 mt-2">
          Our mission is to provide structured learning paths, project-based skill development, and AI-driven mentorship.
        </p>
        <h2 className="text-xl font-semibold text-gray-700 mt-6"> What We Offer</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>🔹 AI-Powered Resume & Portfolio Builder</li>
          <li>🔹 AI-Driven Learning Path Generator</li>
          <li>🔹 Real-time AI Career Mentor</li>
          <li>🔹 Project & Hackathon Hub</li>
          <li>🔹 Internship & Freelance Job Finder</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
