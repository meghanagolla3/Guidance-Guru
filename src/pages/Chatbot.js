// src/pages/Chatbot.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are an AI mentor providing helpful career guidance." },
    { role: "assistant", content: "Hello! I'm your AI Mentor. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAIResponse = async () => {
    try {
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: messages.filter(msg => msg.role !== "system"),
          max_tokens: 150,
          temperature: 0.7,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("OpenAI API Error:", errorData);
        return "Sorry, I couldn't process your request.";
      }
      const data = await response.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return "Sorry, I couldn't process your request.";
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    // Append user message
    const newUserMessage = { role: "user", content: input };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    // Get AI response using the updated conversation history
    const aiReply = await fetchAIResponse();
    setMessages([...updatedMessages, { role: "assistant", content: aiReply }]);
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
            <div key={index} className={`mb-2 ${msg.role === "assistant" ? "text-blue-600" : msg.role === "user" ? "text-gray-800 text-right" : "text-gray-500 text-center"}`}>
              <p>{msg.content}</p>
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
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition">
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Chatbot;
