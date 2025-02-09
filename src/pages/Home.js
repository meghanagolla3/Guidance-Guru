import React from "react";
import { motion } from "framer-motion";
import Testimonials from "../components/Testimonials"; // ✅ Import Testimonials

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="text-center p-10">
        <h1 className="text-5xl font-extrabold text-blue-600">Welcome to Guidance Guru</h1>
        <p className="text-lg text-gray-700 mt-2 max-w-lg">
          Your AI-powered skill development platform for students and professionals.
        </p>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-md transition duration-300"
        >
          Get Started
        </motion.button>
      </div>

      {/* ✅ Add Testimonials Below */}
      <Testimonials />
    </motion.div>
  );
};

export default Home;
