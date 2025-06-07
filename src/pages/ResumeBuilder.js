import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
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

  const [aiSummary, setAiSummary] = useState("");
  const [aiSkills, setAiSkills] = useState("");
  const resumeRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ AI Suggestions - Professional Summary
  const fetchAISummary = async () => {
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/google/t5-small",
        { inputs: `Generate a professional summary for ${formData.name} with experience in ${formData.experience}.` },
        { headers: { Authorization: `Bearer YOUR_HUGGINGFACE_API_KEY` } }
      );
      setAiSummary(response.data[0]?.generated_text || "AI Suggestion not available.");
    } catch (error) {
      console.error("AI Suggestion Error:", error);
      setAiSummary("AI Suggestion not available.");
    }
  };

  // ✅ AI Suggestions - Key Skills
  const fetchAISkills = async () => {
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/google/t5-small",
        { inputs: `Suggest key skills for someone experienced in ${formData.experience}.` },
        { headers: { Authorization: `Bearer YOUR_HUGGINGFACE_API_KEY` } }
      );
      setAiSkills(response.data[0]?.generated_text || "AI Suggestion not available.");
    } catch (error) {
      console.error("AI Suggestion Error:", error);
      setAiSkills("AI Suggestion not available.");
    }
  };

  // ✅ Download Resume as PDF
  const downloadPDF = () => {
    const input = resumeRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("Resume.pdf");
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          AI-Powered Resume Builder
        </h1>

        {/* ✅ Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        <textarea name="summary" placeholder="Professional Summary" value={formData.summary} onChange={handleChange} className="w-full p-2 border rounded mt-4"></textarea>
        <button onClick={fetchAISummary} className="bg-yellow-500 text-white px-4 py-2 rounded mt-2">
          Get AI Summary
        </button>
        {aiSummary && <p className="text-gray-600 mt-2">{aiSummary}</p>}

        <textarea name="education" placeholder="Education" value={formData.education} onChange={handleChange} className="w-full p-2 border rounded mt-4"></textarea>
        <textarea name="experience" placeholder="Work Experience" value={formData.experience} onChange={handleChange} className="w-full p-2 border rounded mt-4"></textarea>
        
        <textarea name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange} className="w-full p-2 border rounded mt-4"></textarea>
        <button onClick={fetchAISkills} className="bg-yellow-500 text-white px-4 py-2 rounded mt-2">
          Get AI Skills
        </button>
        {aiSkills && <p className="text-gray-600 mt-2">{aiSkills}</p>}

        <textarea name="internships" placeholder="Internships" value={formData.internships} onChange={handleChange} className="w-full p-2 border rounded mt-4"></textarea>
        <textarea name="projects" placeholder="Projects" value={formData.projects} onChange={handleChange} className="w-full p-2 border rounded mt-4"></textarea>
        <textarea name="certifications" placeholder="Certifications" value={formData.certifications} onChange={handleChange} className="w-full p-2 border rounded mt-4"></textarea>
        <textarea name="achievements" placeholder="Achievements" value={formData.achievements} onChange={handleChange} className="w-full p-2 border rounded mt-4"></textarea>

        {/* ✅ Resume Live Preview */}
        <div ref={resumeRef} className="mt-6 w-full max-w-6xl bg-white p-6 rounded shadow border">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Live Resume Preview</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Summary:</strong> {formData.summary}</p>
          <p><strong>Skills:</strong> {formData.skills}</p>
        </div>

        <button onClick={downloadPDF} className="w-full bg-blue-500 text-white p-3 rounded-lg mt-4 hover:bg-blue-600 transition">
          Download Resume as PDF
        </button>
      </motion.div>
    </div>
  );
};

export default ResumeBuilder;
