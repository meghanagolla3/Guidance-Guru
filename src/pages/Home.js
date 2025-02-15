// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const levels = [
  {
    title: "Beginner",
    description: "Introduction → Road Maps → Either Business or Jobs",
    details: "Lay the foundation with basic concepts and step-by-step roadmaps.",
    route: "/learning-path",
    state: { level: "Beginner" },
  },
  {
    title: "Medium",
    description: "Front-end Introduction → Languages → Practice & Certification",
    details: "Dive into HTML, CSS, and JS frameworks, building dynamic UIs.",
    route: "/learning-path",
    state: { level: "Medium" },
  },
  {
    title: "High",
    description: "Database Intro → Type of SQLs → Practice & Certification",
    details: "Explore relational databases, advanced queries, and real-world examples.",
    route: "/learning-path",
    state: { level: "High" },
  },
  {
    title: "Pro",
    description: "Back-end Introduction → Languages → Practice & Certification",
    details: "Master server-side languages, APIs, and advanced architectural patterns.",
    route: "/learning-path",
    state: { level: "Pro" },
  },
  {
    title: "Advanced",
    description: "Full Stack Dev → Project Statements → Certification",
    details: "Integrate front-end, back-end, and databases for production-ready apps.",
    route: "/learning-path",
    state: { level: "Advanced" },
  },
  {
    title: "Business",
    description: "Focus on Business Roadmaps → Management → Strategy",
    details: "Develop entrepreneurial skills and business insights to scale your ideas.",
    route: "/learning-path",
    state: { level: "Business" },
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero / Welcome Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image overlay (replace URL with your own if desired) */}
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-50"
          style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?technology,learning")' }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Guidance Guru
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Empower your future with AI-driven skill development and personalized learning paths.
          </motion.p>
          <Link to="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full shadow-lg transition duration-300"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Levels / Road Map Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-800 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Select Your Learning Level
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {levels.map((level, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col justify-between"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{level.title}</h3>
                <p className="text-gray-700 font-semibold mb-2">{level.description}</p>
                <p className="text-gray-600 mb-6">{level.details}</p>
                <Link to={level.route} state={level.state}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Explore {level.title}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Sections: About, Tutorials, Contact, AI Chat Mentor */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-800 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            More to Explore
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* About Section */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">About</h3>
              <p className="text-gray-600 mb-4">
                Learn more about our mission, our AI-driven approach, and how we can help you succeed.
              </p>
              <Link to="/about">
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Read More
                </button>
              </Link>
            </motion.div>

            {/* Tutorials Section */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Tutorials</h3>
              <p className="text-gray-600 mb-4">
                Dive deeper with step-by-step tutorials and best practices for each level.
              </p>
              <Link to="/tutorials">
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Explore Tutorials
                </button>
              </Link>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Contact</h3>
              <p className="text-gray-600 mb-4">
                guidanceguru@gmail.com <br />
                We’d love to hear your feedback or questions!
              </p>
              <a
                href="mailto:guidanceguru@gmail.com"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition inline-block"
              >
                Email Us
              </a>
            </motion.div>

            {/* AI Chat Mentor / Dashboard */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">AI Chat Mentor</h3>
              <p className="text-gray-600 mb-4">
                Get personalized career advice and skill recommendations from our AI Mentor.
              </p>
              <Link to="/chatbot">
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Chat Now
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
