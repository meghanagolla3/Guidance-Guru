import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // ✅ Import Icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-6 mt-10">
      <p className="text-lg font-semibold">Guidance Guru</p>
      <p className="text-gray-400 text-sm">Empowering Students with AI-Powered Learning</p>

      {/* ✅ Social Media Links */}
      <div className="flex justify-center space-x-6 mt-4">
        <motion.a 
          href="https://facebook.com" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }} className="text-blue-400 text-2xl"
        >
          <FaFacebook />
        </motion.a>

        <motion.a 
          href="https://twitter.com" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }} className="text-blue-300 text-2xl"
        >
          <FaTwitter />
        </motion.a>

        <motion.a 
          href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }} className="text-blue-500 text-2xl"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a 
          href="https://instagram.com" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }} className="text-pink-400 text-2xl"
        >
          <FaInstagram />
        </motion.a>
      </div>

      <p className="text-gray-500 text-sm mt-4">&copy; 2025 Guidance Guru. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
