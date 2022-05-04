// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAom2RSmVtEKTkRtPe3vtBgBJ3BXn5FMQY",
  authDomain: "evasysignatures-97e1b.firebaseapp.com",
  projectId: "evasysignatures-97e1b",
  storageBucket: "evasysignatures-97e1b.appspot.com",
  messagingSenderId: "501013749081",
  appId: "1:501013749081:web:bd4b56451fc509f76c8048",
  measurementId: "G-JW92YFEYB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);