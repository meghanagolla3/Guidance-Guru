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

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">🚀 Guidance Guru</h1>
        
        <button className="text-white md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <ul className={`md:flex md:space-x-6 text-white ${isOpen ? "block" : "hidden"} md:block`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              <FaHome className="inline mr-1" /> Home
            </Link>
          </li>
          <li>
            <Link to="/features" onClick={() => setIsOpen(false)}>
              <FaStar className="inline mr-1" /> Features
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              <FaInfoCircle className="inline mr-1" /> About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <FaEnvelope className="inline mr-1" /> Contact
            </Link>
          </li>
          <li>
            <Link to="/dashboard" onClick={() => setIsOpen(false)}>
              <FaTachometerAlt className="inline mr-1" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/resume-builder" onClick={() => setIsOpen(false)}>
              <FaFileAlt className="inline mr-1" /> Resume Builder
            </Link>
          </li>
          <li>
           <Link to="/chatbot" onClick={() => setIsOpen(false)}>
             <FaCommentAlt className="inline mr-1" /> Chatbot
          </Link>
        </li>

          <li>
            <Link to="/signup" onClick={() => setIsOpen(false)}>Signup</Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

