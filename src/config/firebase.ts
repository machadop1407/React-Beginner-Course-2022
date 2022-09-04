// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5v3fPuvXb1ojm0J9ubwVP64-3HK2ic8Y",
  authDomain: "react-course-48f64.firebaseapp.com",
  projectId: "react-course-48f64",
  storageBucket: "react-course-48f64.appspot.com",
  messagingSenderId: "882013883752",
  appId: "1:882013883752:web:31666282cf06bdb15cdadd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
