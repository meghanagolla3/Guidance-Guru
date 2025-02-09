import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-10 bg-gray-100 min-h-screen flex items-center justify-center"
    >
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg p-8 rounded-lg max-w-lg w-full"
      >
        <h1 className="text-3xl font-bold text-blue-600 text-center">Contact Us</h1>
        <p className="text-gray-700 text-center mt-2">
          Have any questions? Feel free to reach out!
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md" 
              placeholder="Your Name" required 
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md" 
              placeholder="Your Email" required 
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-md" 
              rows="4" 
              placeholder="Your Message" required
            ></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
