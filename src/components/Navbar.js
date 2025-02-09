import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-500 p-4 text-white flex justify-between items-center shadow-lg"
    >
      <h1 className="text-xl font-bold">Guidance Guru</h1>

      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link></li>
        <li><Link to="/features" className="hover:text-gray-300 transition duration-300">Features</Link></li>
        <li><Link to="/about" className="hover:text-gray-300 transition duration-300">About</Link></li>
        <li><Link to="/contact" className="hover:text-gray-300 transition duration-300">Contact</Link></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
