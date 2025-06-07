import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  const handleChat = async () => {
    if (!userInput) return;
    setChatResponse("Thinking...");

    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/facebook/blenderbot-3B",
        { inputs: userInput },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_HUGGINGFACE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      setChatResponse(response.data.generated_text || "No response from AI.");
    } catch (error) {
      console.error("Error in chatbot:", error);
      setChatResponse("Error in AI response.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">AI Chatbot</h1>
        <input
          type="text"
          placeholder="Ask me anything..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full p-2 border rounded mt-2"
        />
        <button onClick={handleChat} className="w-full bg-blue-500 text-white p-3 rounded-lg mt-4">
          Ask AI
        </button>
        <p className="text-gray-700 mt-4">{chatResponse}</p>
      </div>
    </div>
  );
};

export default Chatbot;
