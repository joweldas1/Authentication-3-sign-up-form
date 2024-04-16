// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMhlCQBtBbTwVcwVL8gJ8BI1z3b4HczXw",
  authDomain: "authentication-moha-milon.firebaseapp.com",
  projectId: "authentication-moha-milon",
  storageBucket: "authentication-moha-milon.appspot.com",
  messagingSenderId: "348740804779",
  appId: "1:348740804779:web:608a2281b88df2de1717ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
