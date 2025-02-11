// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// Replace these values with your actual configuration from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDKrcrjSmlLnutZIAAaqaf0yX5QYHEYHxc",
  authDomain: "guidance-guru-8a297.firebaseapp.com",
  projectId: "guidance-guru-8a297",
  storageBucket: "guidance-guru-8a297.firebasestorage.app",
  messagingSenderId: "514545927942",
  appId: "1:514545927942:web:11c024b50544cfeb764087",
  measurementId: "G-YMMFQL4CMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics and export it (if you plan to use it)
export const analytics = getAnalytics(app);

// Initialize Firebase Authentication and export it for use in your auth pages
export const auth = getAuth(app);

// Export the initialized Firebase app (optional, if you need it elsewhere)
export default app;
