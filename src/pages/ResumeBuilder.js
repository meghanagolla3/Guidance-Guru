// src/pages/ResumeBuilder.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "",
    experience: "",
    skills: ""
  });
  const [generatedResume, setGeneratedResume] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const generateResume = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate an API call with a delay (replace this with an actual API call)
    setTimeout(() => {
      const resumeText = `Resume for ${formData.name}:
      
Email: ${formData.email}
      
Education: ${formData.education}
      
Experience: ${formData.experience}
      
Skills: ${formData.skills}

[AI generated suggestions will appear here...]`;
      setGeneratedResume(resumeText);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <motion.div 
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">AI Resume Builder</h1>
        <form onSubmit={generateResume}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
          <textarea
            name="education"
            placeholder="Education Details"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          ></textarea>
          <textarea
            name="experience"
            placeholder="Work Experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          ></textarea>
          <textarea
            name="skills"
            placeholder="Skills (comma separated)"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            {loading ? "Generating Resume..." : "Generate Resume"}
          </button>
        </form>
      </motion.div>
      {generatedResume && (
        <motion.div 
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Generated Resume</h2>
          <pre className="whitespace-pre-wrap text-gray-700">{generatedResume}</pre>
        </motion.div>
      )}
    </div>
  );
};

export default ResumeBuilder;
