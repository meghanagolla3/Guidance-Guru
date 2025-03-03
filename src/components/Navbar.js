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
  FaTimes, 
  FaTrophy
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Get and format the current date for display (e.g., "Mon, Feb 10, 2025")
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-xl">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo & Date */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-white text-3xl font-extrabold tracking-wider">
              🚀 GG
            </h1>
          </Link>
          <div className="ml-6 hidden md:block">
            <span className="text-white text-sm">{formattedDate}</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white text-lg hover:text-yellow-300 transition flex items-center space-x-2">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to="/features" className="text-white text-lg hover:text-yellow-300 transition flex items-center space-x-2">
            <FaStar />
            <span>Features</span>
          </Link>
          <Link to="/about" className="text-white text-lg hover:text-yellow-300 transition flex items-center space-x-2">
            <FaInfoCircle />
            <span>About</span>
          </Link>
          <Link to="/contact" className="text-white text-lg hover:text-yellow-300 transition flex items-center space-x-2">
            <FaEnvelope />
            <span>Contact</span>
          </Link>
          <Link to="/dashboard" className="text-white text-lg hover:text-yellow-300 transition flex items-center space-x-2">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </Link>
          <Link to="/resume-builder" className="text-white text-lg hover:text-yellow-300 transition flex items-center space-x-2">
            <FaFileAlt />
            <span>Resume Builder</span>
          </Link>
          <Link to="/chatbot" className="text-white text-lg hover:text-yellow-300 transition flex items-center space-x-2">
            <FaCommentAlt />
            <span>Chatbot</span>
          </Link>
          <Link to="/leaderboard" className="text-white text-lg hover:text-yellow-300 transition flex items-center space-x-2">
            <FaTrophy />
            <span>Leaderboard</span>
          </Link>
          <Link to="/signup" className="text-white text-lg hover:text-yellow-300 transition">
            Register
          </Link>
          <Link to="/login" className="text-white text-lg hover:text-yellow-300 transition">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <Link onClick={() => setIsOpen(false)} to="/" className="text-white text-lg hover:text-yellow-300 transition">
              Home
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/features" className="text-white text-lg hover:text-yellow-300 transition">
              Features
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/about" className="text-white text-lg hover:text-yellow-300 transition">
              About
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/contact" className="text-white text-lg hover:text-yellow-300 transition">
              Contact
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/dashboard" className="text-white text-lg hover:text-yellow-300 transition">
              Dashboard
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/resume-builder" className="text-white text-lg hover:text-yellow-300 transition">
              Resume Builder
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/chatbot" className="text-white text-lg hover:text-yellow-300 transition">
              Chatbot
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/leaderboard" className="text-white text-lg hover:text-yellow-300 transition">
              Leaderboard
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/signup" className="text-white text-lg hover:text-yellow-300 transition">
              Register
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/login" className="text-white text-lg hover:text-yellow-300 transition">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
