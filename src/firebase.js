// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyDKrcrjSmlLnutZIAAaqaf0yX5QYHEYHxc",
  authDomain: "guidance-guru-8a297.firebaseapp.com",
  projectId: "guidance-guru-8a297",
  storageBucket: "guidance-guru-8a297.firebasestorage.app",
  messagingSenderId: "514545927942",
  appId: "1:514545927942:web:11c024b50544cfeb764087",
  measurementId: "G-YMMFQL4CMJ"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
