// src/pages/ResumeBuilder.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    summary: "",
    education: "",
    experience: "",
    skills: "",
    internships: "",
    projects: "",
    strengths: "",
    certifications: "",
    achievements: "",
    hobbies: "",
    declaration: ""
  });
  const [generatedResume, setGeneratedResume] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const generateResume = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const resumeText = `Resume for ${formData.name}

Email: ${formData.email}

Professional Summary:
${formData.summary}

Education:
${formData.education}

Work Experience:
${formData.experience}

Skills:
${formData.skills}

Internships:
${formData.internships}

Projects:
${formData.projects}

Strengths:
${formData.strengths}

Certifications:
${formData.certifications}

Achievements:
${formData.achievements}

Hobbies:
${formData.hobbies}

Declaration:
${formData.declaration}

[AI generated suggestions will appear here...]`;
      setGeneratedResume(resumeText);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Resume Builder Form */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">AI Resume Builder</h1>
        <form onSubmit={generateResume}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <textarea
            name="summary"
            placeholder="Professional Summary"
            value={formData.summary}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-4"
            required
          ></textarea>
          <textarea
            name="education"
            placeholder="Education Details"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-4"
            required
          ></textarea>
          <textarea
            name="experience"
            placeholder="Work Experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-4"
            required
          ></textarea>
          <textarea
            name="skills"
            placeholder="Skills (comma separated)"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-4"
            required
          ></textarea>
          <textarea
            name="internships"
            placeholder="Internships"
            value={formData.internships}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-4"
          ></textarea>
          <textarea
            name="projects"
            placeholder="Projects"
            value={formData.projects}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-4"
          ></textarea>
          <textarea
            name="strengths"
            placeholder="Strengths"
            value={formData.strengths}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-4"
          ></textarea>
          <textarea
            name="certifications"
            placeholder="Certifications"
            value={formData.certifications}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-4"
          ></textarea>
          <textarea
            name="achievements"
            placeholder="Achievements"
            value={formData.achievements}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-4"
          ></textarea>
          <textarea
            name="hobbies"
            placeholder="Hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-4"
          ></textarea>
          <textarea
            name="declaration"
            placeholder="Declaration"
            value={formData.declaration}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg mt-4 hover:bg-blue-600 transition"
          >
            {loading ? "Generating Resume..." : "Generate Resume"}
          </button>
        </form>
      </motion.div>

      {/* Live Preview Section */}
      <div className="mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Live Preview</h2>
        <div className="bg-white p-4 rounded shadow border">
          <pre className="whitespace-pre-wrap text-gray-700">
{`Name: ${formData.name}
Email: ${formData.email}
Summary: ${formData.summary}
Education: ${formData.education}
Experience: ${formData.experience}
Skills: ${formData.skills}
Internships: ${formData.internships}
Projects: ${formData.projects}
Strengths: ${formData.strengths}
Certifications: ${formData.certifications}
Achievements: ${formData.achievements}
Hobbies: ${formData.hobbies}
Declaration: ${formData.declaration}`}
          </pre>
        </div>
      </div>

      {/* Generated Resume Section */}
      {generatedResume && (
        <motion.div 
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mt-6"
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
