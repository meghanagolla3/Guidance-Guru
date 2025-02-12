// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase";
import { getUserProgress, saveUserProgress } from "../services/userService";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      if (user) {
        const data = await getUserProgress(user.uid);
        setProgress(data?.progress || 0);
      }
    };
    fetchProgress();
  }, [user]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error: {error.message}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {user.email}!
        </h1>
        <p className="mt-4 text-gray-600">
          This is your dashboard where you can track your learning progress.
        </p>
        
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-blue-600">Your Progress</h2>
          <div className="mt-4 bg-gray-200 rounded-full h-4 w-full">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: `${progress || 0}%` }}
            ></div>
          </div>
          <p className="mt-2 text-gray-600">{progress || 0}% Completed</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
