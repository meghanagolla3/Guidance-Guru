import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaHome, 
  FaStar, 
  FaInfoCircle, 
  FaEnvelope, 
  FaTachometerAlt, 
  FaBars, 
  FaTimes 
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">🚀 Guidance Guru</h1>
        
        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navbar Links */}
        <ul className={`md:flex md:space-x-6 text-white ${isOpen ? "block" : "hidden"} md:block`}>
          <li>
            <Link
              to="/"
              className="flex items-center space-x-2 hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="flex items-center space-x-2 hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaStar />
              <span>Features</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center space-x-2 hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaInfoCircle />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center space-x-2 hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaEnvelope />
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaTachometerAlt />
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
