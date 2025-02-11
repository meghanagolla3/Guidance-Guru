import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800">📞 Contact Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Have any questions? Reach out to us!
        </p>

        <div className="mt-4">
          <p className="text-md text-gray-700">📧 Email: support@guidanceguru.com</p>
          <p className="text-md text-gray-700">📍 Address: Hyderabad, India</p>
          <p className="text-md text-gray-700">📞 Phone: +91 9876543210</p>
        </div>

        <form className="mt-6">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-lg mb-2" />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded-lg mb-2" />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded-lg mb-2"></textarea>
          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition">Send Message</button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
