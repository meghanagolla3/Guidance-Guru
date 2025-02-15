// src/pages/Login.js
import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { addCoins, getUserData } from "../services/userService";
import { db } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to award daily bonus
  const handleDailyBonus = async (user) => {
    try {
      const data = await getUserData(user.uid);
      const today = new Date().toISOString().split("T")[0];
      const lastLoginDate = data && data.lastLogin ? data.lastLogin.toDate().toISOString().split("T")[0] : null;
      if (lastLoginDate !== today) {
        await addCoins(user.uid, 10); // Award 10 coins as bonus
        await updateDoc(doc(db, "users", user.uid), { lastLogin: serverTimestamp() });
        console.log("Daily bonus awarded!");
      } else {
        console.log("Daily bonus already awarded today.");
      }
    } catch (error) {
      console.error("Error awarding daily bonus:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await handleDailyBonus(user);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Log In</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-lg mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-lg mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
