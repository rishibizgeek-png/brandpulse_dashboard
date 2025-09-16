// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBruV6zdTeJCObUzdcJ4mtUNxQRUoTgx7I",
  authDomain: "brandpulse-d5c1b.firebaseapp.com",
  projectId: "brandpulse-d5c1b",
  storageBucket: "brandpulse-d5c1b.firebasestorage.app",
  messagingSenderId: "1068819480220",
  appId: "1:1068819480220:web:0f80a9ba8c48db68a3f759",
  measurementId: "G-PTT8N7GQ5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
