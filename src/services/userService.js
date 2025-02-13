// src/services/userService.js

import { db } from "../firebase";
import { doc, setDoc, getDoc, updateDoc, increment } from "firebase/firestore";

/**
 * Initializes user data in Firestore if it doesn't exist.
 * Sets initial coins to 0 and lastLogin to null (or any default values).
 */
export const initializeUserData = async (userId) => {
  try {
    await setDoc(doc(db, "users", userId), { coins: 0, lastLogin: null }, { merge: true });
    console.log("User data initialized successfully!");
  } catch (error) {
    console.error("Error initializing user data:", error);
  }
};

/**
 * Retrieves user data from Firestore.
 * Returns the user document data if found, otherwise null.
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
 * Uses Firestore's increment function to update the value.
 */
export const addCoins = async (userId, amount) => {
  try {
    await updateDoc(doc(db, "users", userId), { coins: increment(amount) });
    console.log("Coins updated successfully!");
  } catch (error) {
    console.error("Error updating coins:", error);
  }
};
