import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import {getDatabase} from "firebase/database"
import { getStorage } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAom2RSmVtEKTkRtPe3vtBgBJ3BXn5FMQY",
  authDomain: "evasysignatures-97e1b.firebaseapp.com",
  projectId: "evasysignatures-97e1b",
  storageBucket: "evasysignatures-97e1b.appspot.com",
  messagingSenderId: "501013749081",
  appId: "1:501013749081:web:bd4b56451fc509f76c8048",
  measurementId: "G-JW92YFEYB7"
})
// Initialize Firebase

const analytics = getAnalytics(app);
export const auth = app.auth()
export const db =getDatabase(app)

export const storage = getStorage(app)


export default app