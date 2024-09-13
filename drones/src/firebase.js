// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-drone.firebaseapp.com",
  projectId: "mern-drone",
  storageBucket: "mern-drone.appspot.com",
  messagingSenderId: "887030360332",
  appId: "1:887030360332:web:328c48102ac9ce8e398129",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
