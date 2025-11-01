// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnnM7-MZoglMd9GS7g-jfiouwiMI1NJoo",
  authDomain: "smart-deals-f6fac.firebaseapp.com",
  projectId: "smart-deals-f6fac",
  storageBucket: "smart-deals-f6fac.firebasestorage.app",
  messagingSenderId: "688445903054",
  appId: "1:688445903054:web:15a1fc1b1d6edd76ddc09f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

