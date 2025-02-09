import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const featureList = [
    { title: "📄 AI Resume Builder", description: "Generate professional resumes with AI assistance." },
    { title: "🎯 Personalized Learning", description: "AI-driven learning paths tailored for your goals." },
    { title: "🤖 AI Chat Mentor", description: "Get career guidance from an AI-powered mentor." },
    { title: "🚀 Hackathon Finder", description: "Find and participate in tech hackathons worldwide." }
  ];

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-600">Key Features</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
        {featureList.map((feature, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md p-6 rounded-lg transition transform duration-300"
          >
            <h2 className="text-2xl font-semibold">{feature.title}</h2>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
