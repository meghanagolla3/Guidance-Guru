// src/services/userService.js

import { db } from "../firebase"; // Import the Firestore instance from your firebase configuration
import { doc, setDoc, getDoc } from "firebase/firestore";

/**
 * Save user progress to Firestore.
 * 
 * @param {string} userId - The unique ID of the user.
 * @param {number} progress - The progress value to save (e.g., percentage completed).
 */
export const saveUserProgress = async (userId, progress) => {
  try {
    // Use merge:true to merge with any existing data instead of overwriting it.
    await setDoc(doc(db, "users", userId), { progress }, { merge: true });
    console.log("User progress saved successfully!");
  } catch (error) {
    console.error("Error saving user progress:", error);
  }
};

/**
 * Retrieve user progress from Firestore.
 * 
 * @param {string} userId - The unique ID of the user.
 * @returns {object|null} - The user's data or null if no data exists.
 */
export const getUserProgress = async (userId) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("User progress fetched:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No user progress found.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user progress:", error);
    return null;
  }
};
