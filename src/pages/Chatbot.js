import React, { useState } from "react";
import { motion } from "framer-motion";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm your AI Mentor. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Append user's message
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    
    // Simulate a delay and then add a bot response
    setLoading(true);
    setTimeout(() => {
      const botResponse = { sender: "bot", text: "That's an interesting question! Let me think..." };
      setMessages((prev) => [...prev, botResponse]);
      setLoading(false);
    }, 1500);
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
            className="w-full p-2 border rounded-l-lg"
            placeholder="Ask your mentor..."
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
