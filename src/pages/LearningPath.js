import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const learningPaths = {
  Beginner: {
    title: "🟢 Beginner Level",
    description: "Start with the fundamentals. Learn the basics before moving forward.",
    topics: ["HTML & CSS", "Basic JavaScript", "Version Control (Git)", "Basic Problem Solving"],
    courses: [
      { name: "HTML & CSS Crash Course", link: "https://www.w3schools.com" },
      { name: "JavaScript for Beginners", link: "https://javascript.info" },
    ],
    projects: ["Build a simple portfolio", "Create a basic calculator", "Make a to-do list app"],
  },
  Intermediate: {
    title: "🟡 Intermediate Level",
    description: "Improve your skills with real-world projects and deeper learning.",
    topics: ["React.js & Component-based UI", "Advanced JavaScript", "Backend Basics", "APIs & Databases"],
    courses: [
      { name: "React.js Complete Guide", link: "https://react.dev" },
      { name: "Node.js for Beginners", link: "https://nodejs.org/en/learn" },
    ],
    projects: ["Create a weather app", "Build a blogging platform", "Develop a chat application"],
  },
  Advanced: {
    title: "🔴 Advanced Level",
    description: "Become an expert by working on complex projects and advanced concepts.",
    topics: ["Full-Stack Development", "Optimizing Web Performance", "Machine Learning", "Cloud & DevOps"],
    courses: [
      { name: "Full-Stack Web Development", link: "https://fullstackopen.com" },
      { name: "AI & Machine Learning", link: "https://www.coursera.org/specializations/machine-learning-introduction" },
    ],
    projects: ["Build an AI-powered chatbot", "Create an e-commerce website", "Develop a SaaS application"],
  },
};

const LearningPath = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const level = location.state?.level;
  const path = learningPaths[level];

  if (!path) {
    // Redirect to homepage if invalid or missing level
    navigate("/");
    return null;
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6"
      style={{
        background: "radial-gradient(circle at top left, #ffffff, #f0f0f0)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl border border-gray-200"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{path.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{path.description}</p>

        {/* Topics */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2"> Topics to Learn:</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            {path.topics.map((topic, index) => (
              <motion.li key={index} whileHover={{ scale: 1.03 }}>
                {topic}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2"> Recommended Courses:</h2>
          <ul className="space-y-2">
            {path.courses.map((course, index) => (
              <motion.li key={index} whileHover={{ scale: 1.03 }}>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {course.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-2"> Suggested Projects:</h2>
          <ul className="space-y-2">
            {path.projects.map((project, index) => (
              <motion.li key={index} whileHover={{ scale: 1.03 }}>
                {project}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default LearningPath;

