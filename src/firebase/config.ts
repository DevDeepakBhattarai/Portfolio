// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ4FpngTCThHtlTYQpzDSo68w4bImABpI",
  authDomain: "portfolio-ccac1.firebaseapp.com",
  projectId: "portfolio-ccac1",
  storageBucket: "portfolio-ccac1.appspot.com",
  messagingSenderId: "639464665032",
  appId: "1:639464665032:web:a32b4c8fc49c521e2a9afd",
  measurementId: "G-D90LY579JF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fireStore = getFirestore(app);
export const googleAuthProvider = new GoogleAuthProvider();
