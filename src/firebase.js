import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDfFNUJg9XNn0hjUxwFX5K3dBvZnSsxj8Q",
  authDomain: "guidance-guru-fa44b.firebaseapp.com",
  projectId: "guidance-guru-fa44b",
  storageBucket: "guidance-guru-fa44b.firebasestorage.app",
  messagingSenderId: "57663732336",
  appId: "1:57663732336:web:3eb2afb4bd5dd3463812b5",
  measurementId: "G-DCLV91037K"
};

const app = initializeApp(firebaseConfig);

// Init Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
