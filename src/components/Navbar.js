import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBolt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";  // ✅ Import Menu Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      className="bg-white shadow-md py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900">Guidance Guru</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <Link to="/" className="flex items-center text-lg font-medium text-blue-600 hover:text-blue-800 transition">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/features" className="flex items-center text-lg font-medium text-green-600 hover:text-green-800 transition">
            <FaBolt className="mr-2" /> Features
          </Link>
          <Link to="/about" className="flex items-center text-lg font-medium text-purple-600 hover:text-purple-800 transition">
            <FaInfoCircle className="mr-2" /> About
          </Link>
          <Link to="/contact" className="flex items-center text-lg font-medium text-red-600 hover:text-red-800 transition">
            <FaPhone className="mr-2" /> Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center bg-gray-100 py-4 space-y-4"
        >
          <Link to="/" className="text-lg font-medium text-blue-600" onClick={() => setIsOpen(false)}>🏠 Home</Link>
          <Link to="/features" className="text-lg font-medium text-green-600" onClick={() => setIsOpen(false)}>⚡ Features</Link>
          <Link to="/about" className="text-lg font-medium text-purple-600" onClick={() => setIsOpen(false)}>ℹ️ About</Link>
          <Link to="/contact" className="text-lg font-medium text-red-600" onClick={() => setIsOpen(false)}>📞 Contact</Link>
        </motion.div>
      )}

    </motion.nav>
  );
};

export default Navbar;
