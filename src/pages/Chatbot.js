import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(
    "Hugging Face API key:",
    process.env.REACT_APP_HUGGINGFACE_API_KEY
  );

  const handleChat = async () => {
    if (!userInput.trim()) return;
    setLoading(true);
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

      // Hugging Face sometimes returns the output differently based on the model
      const generatedText =
        response.data?.generated_text ||
        (Array.isArray(response.data)
          ? response.data[0]?.generated_text
          : null) ||
        "No response from AI.";

      setChatResponse(generatedText);
    } catch (error) {
      console.error("Error in chatbot:", error);
      setChatResponse(
        "Error in AI response. Please check your API key and model."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleChat();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          AI Chatbot
        </h1>
        <input
          type="text"
          placeholder="Ask me anything..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-2 border rounded mt-2"
          disabled={loading}
        />
        <button
          onClick={handleChat}
          className={`w-full p-3 rounded-lg mt-4 text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>
        <p className="text-gray-700 mt-4 whitespace-pre-wrap">{chatResponse}</p>
      </div>
    </div>
  );
};

export default Chatbot;
