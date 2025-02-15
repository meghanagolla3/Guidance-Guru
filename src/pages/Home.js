// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center px-4">
      <motion.div
        className="bg-white shadow-2xl rounded-lg p-8 max-w-3xl text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold text-primary mb-4">
          Welcome to Guidance Guru
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Your AI-powered skill development platform. Unlock your potential with personalized learning paths.
        </p>
        <Link to="/questionnaire">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            Get Started
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
