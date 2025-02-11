import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const questions = [
  { id: 1, question: "What field are you interested in?", options: ["Web Development", "AI & Machine Learning", "Data Science"] },
  { id: 2, question: "What is your current experience level?", options: ["Beginner", "Intermediate", "Advanced"] },
  { id: 3, question: "What do you want to achieve?", options: ["Get a job", "Freelancing", "Start a startup"] },
];

const Questionnaire = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (answer) => {
    const updatedAnswers = { ...answers, [questions[currentStep].id]: answer };
    setAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const userLevel = updatedAnswers[2] || "Beginner";
      navigate("/learning-path", { state: { level: userLevel } });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg"
      >
        <h2 className="text-xl font-semibold mb-4">{questions[currentStep].question}</h2>
        <div className="flex flex-col space-y-2">
          {questions[currentStep].options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Questionnaire;
