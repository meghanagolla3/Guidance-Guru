import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Questionnaire from "./pages/Questionnaire";
import LearningPath from "./pages/LearningPath";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PhoneLogin from "./pages/PhoneLogin";
import Chatbot from "./pages/Chatbot";
import ResumeBuilder from "./pages/ResumeBuilder";
import Profile from "./pages/Profile";
import Tutorials from "./pages/Tutorials";
import Leaderboard from "./pages/Leaderboard";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/phone-login" element={<PhoneLogin />} />

        {/* All Routes Now Public */}
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/learning-path" element={<LearningPath />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
};

export default App;
