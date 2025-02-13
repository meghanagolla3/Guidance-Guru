// src/services/userService.js

import { db } from "../firebase"; // Make sure your firebase.js is inside src/ and named correctly
import { doc, updateDoc, getDoc, setDoc, increment } from "firebase/firestore";

/**
 * Add coins to a user's coin balance.
 * @param {string} userId - The user's unique ID.
 * @param {number} amount - The number of coins to add.
 */
export const addCoins = async (userId, amount) => {
  try {
    // This will increment the 'coins' field by the specified amount.
    await updateDoc(doc(db, "users", userId), { coins: increment(amount) });
    console.log("Coins updated successfully!");
  } catch (error) {
    console.error("Error updating coins:", error);
  }
};

/**
 * Retrieve a user's data from Firestore.
 * @param {string} userId - The user's unique ID.
 * @returns {object|null} - The user's data if it exists, or null.
 */
export const getUserData = async (userId) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No user data found.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

/**
 * Initialize user data if it doesn't exist (e.g., when a user signs up).
 * @param {string} userId - The user's unique ID.
 */
export const initializeUserData = async (userId) => {
  try {
    // Set initial coin balance to 0 along with any other fields you want
    await setDoc(doc(db, "users", userId), { coins: 0 }, { merge: true });
    console.log("User data initialized successfully!");
  } catch (error) {
    console.error("Error initializing user data:", error);
  }
};
