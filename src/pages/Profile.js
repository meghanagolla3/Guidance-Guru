// src/pages/Profile.js
import React, { useEffect, useState } from "react";
// import { fetchUsers,registerUser } from "../services/userService";
import { motion } from "framer-motion";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase"; // adjust path as needed
import { getUserData, updateUserProfile } from "../services/userService"; // or wherever you define these


const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [profileData, setProfileData] = useState({ displayName: "", bio: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const data = await getUserData(user.uid);
        if (data) {
          setProfileData({
            displayName: data.displayName || user.displayName || "",
            bio: data.bio || ""
          });
        }
      }
    };
    fetchProfile();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      await updateUserProfile(user.uid, profileData);
      setMessage("Profile updated successfully!");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <motion.div 
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
        {message && <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">{message}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="displayName"
            placeholder="Display Name"
            value={profileData.displayName}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
          <textarea
            name="bio"
            placeholder="Your Bio"
            value={profileData.bio}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Update Profile
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Profile;
