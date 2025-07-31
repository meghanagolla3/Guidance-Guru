import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome, FaStar, FaInfoCircle, FaEnvelope,
  FaTachometerAlt, FaFileAlt, FaCommentAlt,
  FaBars, FaTimes, FaTrophy
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/features", label: "Features", icon: <FaStar /> },
    { to: "/about", label: "About", icon: <FaInfoCircle /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
    { to: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { to: "/resume-builder", label: "Resume Builder", icon: <FaFileAlt /> },
    { to: "/chatbot", label: "Chatbot", icon: <FaCommentAlt /> },
    { to: "/leaderboard", label: "Leaderboard", icon: <FaTrophy /> },
    { to: "/signup", label: "Register" },
    { to: "/login", label: "Login" },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white text-3xl font-bold tracking-wide">
          GG
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={label}
              to={to}
              className="text-white hover:text-yellow-300 text-lg flex items-center space-x-2 transition duration-200"
            >
              {icon && <span>{icon}</span>}
              <span>{label}</span>
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-4 py-4 space-y-3 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        {navLinks.map(({ to, label }) => (
          <Link
            key={label}
            to={to}
            onClick={() => setIsOpen(false)}
            className="block text-white text-lg hover:text-yellow-300 transition"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
