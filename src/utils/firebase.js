// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAngThCZQSY4WRU2vV3a82mx3KHXEGify8",
  authDomain: "netflixgpt-fc694.firebaseapp.com",
  projectId: "netflixgpt-fc694",
  storageBucket: "netflixgpt-fc694.appspot.com",
  messagingSenderId: "550696361068",
  appId: "1:550696361068:web:d77909844d870b2d234c49",
  measurementId: "G-WQBSHFCHDV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
