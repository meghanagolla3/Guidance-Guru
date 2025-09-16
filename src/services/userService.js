import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase"; // make sure this is correctly set up

// Fetch user data
export const getUserData = async (uid) => {
  try {
    const userRef = doc(db, "users", uid);
    const docSnap = await getDoc(userRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

// Update user profile
export const updateUserProfile = async (uid, updatedData) => {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, updatedData);
    return true;
  } catch (error) {
    console.error("Error updating user profile:", error);
    return false;
  }
};
