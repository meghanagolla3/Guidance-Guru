// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaHome, 
  FaStar, 
  FaInfoCircle, 
  FaEnvelope, 
  FaTachometerAlt, 
  FaFileAlt, 
  FaCommentAlt, 
  FaBars, 
  FaTimes 
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Get and format the current date
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo and Date Display */}
          <h1 className="text-white text-3xl font-extrabold tracking-wide mr-4">
            🚀 Guidance Guru
          </h1>
          <div className="text-white text-lg">
            {formattedDate}
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        {/* Navbar Links */}
        <ul className={`md:flex md:space-x-8 text-white ${isOpen ? "block" : "hidden"} md:block`}>
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 hover:text-yellow-300 transition"
            >
              <FaHome className="inline" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 hover:text-yellow-300 transition"
            >
              <FaStar className="inline" />
              <span>Features</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 hover:text-yellow-300 transition"
            >
              <FaInfoCircle className="inline" />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 hover:text-yellow-300 transition"
            >
              <FaEnvelope className="inline" />
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 hover:text-yellow-300 transition"
            >
              <FaTachometerAlt className="inline" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/resume-builder"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 hover:text-yellow-300 transition"
            >
              <FaFileAlt className="inline" />
              <span>Resume Builder</span>
            </Link>
          </li>
          <li>
            <Link
              to="/chatbot"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 hover:text-yellow-300 transition"
            >
              <FaCommentAlt className="inline" />
              <span>Chatbot</span>
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-300 transition"
            >
              Signup
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-300 transition"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
