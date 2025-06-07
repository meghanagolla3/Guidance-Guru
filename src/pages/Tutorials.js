// src/pages/Tutorials.js
import React from "react";
import { motion } from "framer-motion";

const tutorials = [
  { title: "React Basics", description: "Learn the fundamentals of React." },
  { title: "Advanced JavaScript", description: "Deep dive into modern JavaScript features." },
  { title: "Full Stack Development", description: "Master both front-end and back-end development." },
];

const Tutorials = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <motion.h2
        className="text-3xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Tutorials & Resources
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tutorials.map((tut, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">{tut.title}</h3>
            <p className="text-gray-600">{tut.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
