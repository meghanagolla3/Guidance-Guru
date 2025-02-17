// src/services/userService.js
import { db } from "../firebase";
import { doc, setDoc, getDoc, updateDoc, increment } from "firebase/firestore";

/**
 * Initializes a new user's data in Firestore.
 * Sets coins to 0, lastLogin to null, achievements to an empty array,
 * streak to 0, and includes fields for displayName and bio.
 */
export const initializeUserData = async (userId) => {
  try {
    await setDoc(
      doc(db, "users", userId),
      { 
        coins: 0, 
        lastLogin: null,
        achievements: [],
        streak: 0,
        displayName: "",
        bio: ""
      },
      { merge: true }
    );
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

/**
 * Updates the user's profile data.
 */
export const updateUserProfile = async (userId, profileData) => {
  try {
    await updateDoc(doc(db, "users", userId), profileData);
    console.log("Profile updated successfully!");
  } catch (error) {
    console.error("Error updating profile:", error);
  }
};
