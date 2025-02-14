// src/pages/Chatbot.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm your AI Mentor. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to call OpenAI API
  const fetchAIResponse = async (userMessage) => {
    try {
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo", // Change to "gpt-4" if available and desired
          messages: [
            { role: "system", content: "You are an AI mentor providing helpful career guidance." },
            { role: "user", content: userMessage },
          ],
          max_tokens: 150,
          temperature: 0.7,
        }),
      });
      const data = await response.json();
      const aiMessage = data.choices[0].message.content.trim();
      return aiMessage;
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return "Sorry, I couldn't process your request.";
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Append user's message
    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Get AI response
    const aiResponse = await fetchAIResponse(userMessage.text);
    const botMessage = { sender: "bot", text: aiResponse };
    setMessages(prev => [...prev, botMessage]);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-4">AI Mentor Chatbot</h1>
        <div className="h-64 overflow-y-auto border p-4 mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${msg.sender === "bot" ? "text-blue-600" : "text-gray-800 text-right"}`}
            >
              <p>{msg.text}</p>
            </div>
          ))}
          {loading && <p className="text-blue-600">Typing...</p>}
        </div>
        <form onSubmit={handleSend} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your mentor..."
            className="w-full p-2 border rounded-l-lg"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition"
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Chatbot;
