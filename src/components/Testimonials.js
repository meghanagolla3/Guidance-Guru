import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Rohan Mehta", feedback: "Guidance Guru helped me build my resume and land my dream job!" },
  { name: "Sanya Sharma", feedback: "The AI-powered learning paths are so helpful! Best platform for students." },
  { name: "Amit Verma", feedback: "I found my first internship through Guidance Guru. Highly recommend!" }
];

const Testimonials = () => {
  return (
    <div className="p-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-600">What Our Users Say</h2>

      <div className="mt-6 flex flex-col items-center space-y-6">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg w-full text-center"
          >
            <p className="text-gray-700 text-lg">"{testimonial.feedback}"</p>
            <h3 className="text-blue-500 font-semibold mt-2">- {testimonial.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
