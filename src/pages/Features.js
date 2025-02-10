import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center text-center p-10">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-10">🚀 Our Powerful Features</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
        
        {/* Feature 1: AI Resume Builder */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="bg-blue-100 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-semibold text-blue-800">📄 AI Resume Builder</h2>
          <p className="text-gray-700 mt-3">Create ATS-friendly resumes with AI suggestions.</p>
        </motion.div>

        {/* Feature 2: Personalized Learning Paths */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
          className="bg-green-100 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-semibold text-green-800">📚 Personalized Learning Paths</h2>
          <p className="text-gray-700 mt-3">Get step-by-step guidance to build skills.</p>
        </motion.div>

        {/* Feature 3: Internship Finder */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.9 }}
          className="bg-yellow-100 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-semibold text-yellow-800">💼 Internship Finder</h2>
          <p className="text-gray-700 mt-3">Find internships and freelance gigs easily.</p>
        </motion.div>

        {/* Feature 4: Hackathon Finder */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.1 }}
          className="bg-red-100 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-semibold text-red-800">🏆 Hackathon Finder</h2>
          <p className="text-gray-700 mt-3">Discover and participate in upcoming hackathons.</p>
        </motion.div>

      </div>
    </div>
  );
};

export default Features;
