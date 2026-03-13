import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "star-guardian-948e6.firebaseapp.com",
  projectId: "star-guardian-948e6",
  storageBucket: "star-guardian-948e6.firebasestorage.app",
  messagingSenderId: "177919411465",
  appId: "1:177919411465:web:0d0779cafdbef42722ffd8",
  measurementId: "G-YCD428N3YG"
};

const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const auth = getAuth(app);
export const db = getFirestore(app);