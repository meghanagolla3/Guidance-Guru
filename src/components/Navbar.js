import React from "react";
import { FaHome, FaInfoCircle, FaBolt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      className="bg-white shadow-md py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-center items-center space-x-12">
        
        {/* Home */}
        <motion.a 
          href="/" 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
          className="flex items-center text-xl font-semibold text-blue-600 hover:text-blue-800 transition duration-300"
        >
          <FaHome className="mr-2" /> Home
        </motion.a>

        {/* Features */}
        <motion.a 
          href="/features" 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
          className="flex items-center text-xl font-semibold text-green-600 hover:text-green-800 transition duration-300"
        >
          <FaBolt className="mr-2" /> Features
        </motion.a>

        {/* About */}
        <motion.a 
          href="/about" 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
          className="flex items-center text-xl font-semibold text-purple-600 hover:text-purple-800 transition duration-300"
        >
          <FaInfoCircle className="mr-2" /> About
        </motion.a>

        {/* Contact */}
        <motion.a 
          href="/contact" 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
          className="flex items-center text-xl font-semibold text-red-600 hover:text-red-800 transition duration-300"
        >
          <FaPhone className="mr-2" /> Contact
        </motion.a>

      </div>
    </motion.nav>
  );
};

export default Navbar;
