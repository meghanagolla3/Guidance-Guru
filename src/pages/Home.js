import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLayerGroup,
  FaDatabase,
  FaServer,
  FaLaptopCode,
  FaBriefcase,
} from "react-icons/fa";

const levels = [
  {
    title: "1. Beginner",
    description: "Introduction → Road Maps → Either Business or Jobs",
    details:
      "Lay the foundation with basic concepts and step-by-step roadmaps.",
    icon: FaUserGraduate,
    route: "/learning-path",
    state: { level: "Beginner" },
  },
  {
    title: "2. Intermediate",
    description: "Front-end → Languages → Practice Problems → Certification",
    details: "Dive into front-end frameworks and build dynamic UIs.",
    icon: FaLayerGroup,
    route: "/learning-path",
    state: { level: "Intermediate" },
  },
  {
    title: "3. Intermediate",
    description: "Databases → SQL Types → Practice Problems → Certification",
    details: "Explore SQL databases and advanced queries hands-on.",
    icon: FaDatabase,
    route: "/learning-path",
    state: { level: "Intermediate" },
  },
  {
    title: "4. Advanced",
    description: "Back-end → Languages → Practice Problems → Certification",
    details: "Master server-side languages and APIs.",
    icon: FaServer,
    route: "/learning-path",
    state: { level: "Advanced" },
  },
  {
    title: "5. Advanced",
    description: "Full Stack → Projects → Certification",
    details:
      "Integrate front-end, back-end, and databases for full-stack skills.",
    icon: FaLaptopCode,
    route: "/learning-path",
    state: { level: "Advanced" },
  },
  {
    title: "6. Advanced",
    description: "Business Roadmaps → Strategy → Growth",
    details: "Focus on business development, management, and entrepreneurship.",
    icon: FaBriefcase,
    route: "/learning-path",
    state: { level: "Advanced" },
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-gray-800">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="relative z-10 max-w-3xl">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to Guidance Guru
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Beyond Confusion, Towards Clarity!
          </motion.p>

          <Link to="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg font-semibold transition duration-300"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Learning Levels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Select Your Learning Level
          </motion.h2>

          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {levels.map((level, index) => {
              const Icon = level.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-xl flex flex-col justify-between hover:shadow-2xl transition"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Icon className="text-4xl text-blue-600 mb-3" />
                  <h3 className="text-2xl font-bold mb-2">{level.title}</h3>
                  <p className="text-gray-700 font-semibold mb-2">
                    {level.description}
                  </p>
                  <p className="text-gray-600 mb-4">{level.details}</p>
                  <Link to={level.route} state={level.state}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                      Explore {level.title}
                    </motion.button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About • Tutorials • Contact • AI Chat Mentor
          </motion.h2>

          <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
            {/* About */}
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-2">About</h3>
              <p className="text-gray-600 mb-4">
                Learn more about our mission, our AI-driven approach, and how we
                can help you succeed.
              </p>
              <Link to="/about">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Read More
                </button>
              </Link>
            </motion.div>

            {/* Tutorials */}
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-2">Tutorials</h3>
              <p className="text-gray-600 mb-4">
                Dive deeper with step-by-step tutorials and best practices for
                each level.
              </p>
              <Link to="/tutorials">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Explore Tutorials
                </button>
              </Link>
            </motion.div>

            {/* Contact */}
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-2">Contact</h3>
              <p className="text-gray-600 mb-4">
                guidanceguru@gmail.com <br />
                We’d love to hear your feedback or questions!
              </p>
              <a
                href="mailto:guidanceguru@gmail.com"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition inline-block"
              >
                Email Us
              </a>
            </motion.div>

            {/* AI Chat Mentor */}
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-2">AI Chat Mentor</h3>
              <p className="text-gray-600 mb-4">
                Get personalized career advice and skill recommendations from
                our AI Mentor.
              </p>
              <Link to="/dashboard">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Go to Dashboard
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
