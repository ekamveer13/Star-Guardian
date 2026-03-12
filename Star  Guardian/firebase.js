// Import Firebase SDK modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyANqCKOiFmjglfGs4mUPKIthg_MB5tVBC8",
  authDomain: "star-guardian-948e6.firebaseapp.com",
  projectId: "star-guardian-948e6",
  storageBucket: "star-guardian-948e6.firebasestorage.app",
  messagingSenderId: "177919411465",
  appId: "1:177919411465:web:0d0779cafdbef42722ffd8",
  measurementId: "G-YCD428N3YG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Also expose to window for non-module scripts
if (typeof window !== 'undefined') {
  window.app = app;
  window.auth = auth;
  window.db = db;
}