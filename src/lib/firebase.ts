import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Firebase configuration — hardcoded with env var fallbacks
// This ensures the app works even if .env isn't loaded at runtime
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCMk8whdQhABLW-avZFHt5Rkn8bl312Wcc",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "theblacmoment-2c18e.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "theblacmoment-2c18e",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "theblacmoment-2c18e.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "510560732546",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:510560732546:web:6c7b4b02c4df8d934f3b9b",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-G2W21P6X2D",
};

// Initialize Firebase (prevent re-initialization in dev hot reloads)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Firestore instance
export const db = getFirestore(app);

// Storage instance
export const storage = getStorage(app);

// Analytics (client-side only)
export const analytics =
  typeof window !== "undefined"
    ? isSupported().then((yes) => (yes ? getAnalytics(app) : null))
    : null;

export default app;
