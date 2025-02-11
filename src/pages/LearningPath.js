import React from "react";
import { useLocation } from "react-router-dom";
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
  const userLevel = location.state?.level || "Beginner"; // Default to Beginner if no level is selected

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl"
      >
        <h1 className="text-3xl font-bold text-gray-800">{learningPaths[userLevel].title}</h1>
        <p className="text-lg text-gray-600 mt-2">{learningPaths[userLevel].description}</p>
        
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-700">📌 Topics to Learn:</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            {learningPaths[userLevel].topics.map((topic, index) => (
              <motion.li key={index} whileHover={{ scale: 1.05 }} className="mt-1">
                {topic}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-blue-700">📚 Recommended Courses:</h2>
          <ul className="mt-2">
            {learningPaths[userLevel].courses.map((course, index) => (
              <motion.li key={index} whileHover={{ scale: 1.05 }}>
                <a href={course.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {course.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-green-700">💡 Suggested Projects:</h2>
          <ul className="mt-2">
            {learningPaths[userLevel].projects.map((project, index) => (
              <motion.li key={index} whileHover={{ scale: 1.05 }}>
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
