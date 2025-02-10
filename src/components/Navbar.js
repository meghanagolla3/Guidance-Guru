import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold text-gray-800">Guidance Guru</h1>
        <div className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/features" className="text-gray-600 hover:text-blue-600">Features</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>  {/* ✅ Fixed */}
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
