// src/pages/ResumeBuilder.js
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import OpenAI from "openai";
import jsPDF from "jspdf";

// Initialize OpenAI client with your API key from the environment variable
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

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
    declaration: "",
  });
  const [generatedResume, setGeneratedResume] = useState("");
  const [aiSuggestions, setAiSuggestions] = useState("");
  const [loading, setLoading] = useState(false);
  const resumeRef = useRef();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Generate resume and fetch AI suggestions
  const generateResume = async (e) => {
    e.preventDefault();
    setLoading(true);

    const resumeText = `🚀 Resume for ${formData.name}
        
📩 Email: ${formData.email}

✨ Professional Summary:
${formData.summary}

🎓 Education:
${formData.education}

💼 Work Experience:
${formData.experience}

🛠️ Skills:
${formData.skills}

💡 Internships:
${formData.internships}

🚀 Projects:
${formData.projects}

💪 Strengths:
${formData.strengths}

🏆 Certifications:
${formData.certifications}

🥇 Achievements:
${formData.achievements}

🎨 Hobbies:
${formData.hobbies}

✅ Declaration:
${formData.declaration}`;

    setGeneratedResume(resumeText);
    setLoading(false);
    fetchAiSuggestions(resumeText);
  };

  // Fetch AI-powered suggestions from OpenAI using GPT-3.5-turbo
  const fetchAiSuggestions = async (resumeText) => {
    setLoading(true);
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are an expert resume assistant. Provide concise and professional improvement suggestions for a resume.",
          },
          {
            role: "user",
            content: `Here is my resume:\n${resumeText}\nPlease suggest improvements.`,
          },
        ],
      });
      const suggestion = response.data.choices[0].message.content.trim();
      setAiSuggestions(suggestion);
    } catch (error) {
      console.error("Error fetching AI suggestions:", error);
      setAiSuggestions("⚠️ Could not generate AI suggestions. Please try again later.");
    }
    setLoading(false);
  };

  // Download the generated resume as PDF using jsPDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Generated Resume", 20, 20);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(generatedResume, 20, 30, { maxWidth: 170 });
    doc.save("resume.pdf");
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
        <h1 className="text-3xl font-extrabold text-indigo-700 text-center mb-4">
          📄 AI Resume Builder
        </h1>
        <form onSubmit={generateResume} className="space-y-4">
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
            className="w-full p-2 border rounded"
            required
          ></textarea>
          <textarea
            name="education"
            placeholder="Education Details"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          ></textarea>
          <textarea
            name="experience"
            placeholder="Work Experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          ></textarea>
          <textarea
            name="skills"
            placeholder="Skills (comma separated)"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          ></textarea>
          <textarea
            name="internships"
            placeholder="Internships"
            value={formData.internships}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
          <textarea
            name="projects"
            placeholder="Projects"
            value={formData.projects}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
          <textarea
            name="strengths"
            placeholder="Strengths"
            value={formData.strengths}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
          <textarea
            name="certifications"
            placeholder="Certifications"
            value={formData.certifications}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
          <textarea
            name="achievements"
            placeholder="Achievements"
            value={formData.achievements}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
          <textarea
            name="hobbies"
            placeholder="Hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
          <textarea
            name="declaration"
            placeholder="Declaration"
            value={formData.declaration}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-3 rounded-lg mt-4 hover:bg-indigo-600 transition"
          >
            {loading ? "Generating Resume..." : "Generate Resume"}
          </button>
        </form>
      </motion.div>

      {/* AI Suggestions Section */}
      {aiSuggestions && (
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">🧠 AI-Powered Suggestions</h2>
          <p className="text-gray-700">{aiSuggestions}</p>
        </motion.div>
      )}

      {/* Resume Preview Section */}
      {generatedResume && (
        <motion.div
          ref={resumeRef}
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Generated Resume</h2>
          <pre className="whitespace-pre-wrap text-gray-700">{generatedResume}</pre>
        </motion.div>
      )}

      {/* Download PDF Button */}
      {generatedResume && (
        <motion.button
          onClick={downloadPDF}
          className="bg-green-500 text-white p-3 rounded-lg mt-4 hover:bg-green-600 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          📥 Download Resume (PDF)
        </motion.button>
      )}
    </div>
  );
};

export default ResumeBuilder;
