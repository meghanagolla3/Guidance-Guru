// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWTrv60bjshzUdl25kVx1ajS_4QHvCEiA",
  authDomain: "guidance-guru-8a297.firebaseapp.com",
  projectId: "guidance-guru-8a297",
  storageBucket: "guidance-guru-8a297.appspot.com",
  messagingSenderId: "514545927942",
  appId: "1:514545927942:web:32a0d53642c8c724764087",
  measurementId: "G-NPKT6ELC4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
