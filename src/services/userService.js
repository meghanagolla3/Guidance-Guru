// src/services/userService.js
import { db } from "../firebase";
import { doc, setDoc, getDoc, updateDoc, increment } from "firebase/firestore";

/**
 * Initializes a new user's data in Firestore.
 * Sets coins to 0, lastLogin to null, and achievements as an empty array.
 */
export const initializeUserData = async (userId) => {
  try {
    await setDoc(doc(db, "users", userId), { 
      coins: 0, 
      lastLogin: null,
      achievements: []
    }, { merge: true });
    console.log("User data initialized successfully!");
  } catch (error) {
    console.error("Error initializing user data:", error);
  }
};

/**
 * Retrieves user data from Firestore.
 */
export const getUserData = async (userId) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("User data fetched:", docSnap.data());
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
 * Adds coins to a user's coin balance.
 */
export const addCoins = async (userId, amount) => {
  try {
    await updateDoc(doc(db, "users", userId), { coins: increment(amount) });
    console.log("Coins updated successfully!");
  } catch (error) {
    console.error("Error updating coins:", error);
  }
};
