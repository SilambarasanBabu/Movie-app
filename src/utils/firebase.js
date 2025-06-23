// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_dFJV-FZK-BAhmo52GI8UZyaHsnMkiQs",
  authDomain: "netflixbe-51de4.firebaseapp.com",
  projectId: "netflixbe-51de4",
  storageBucket: "netflixbe-51de4.firebasestorage.app",
  messagingSenderId: "246974732188",
  appId: "1:246974732188:web:aee068b098d1876f105a59",
  measurementId: "G-B8WSKXX1MT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
