import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyACqJIChb5XmjF37oyVqBf3aaKOI2jXhM4",
  authDomain: "roxsacademy.firebaseapp.com",
  projectId: "roxsacademy",
  storageBucket: "roxsacademy.appspot.com",
  messagingSenderId: "963319689202",
  appId: "1:963319689202:web:d326d65ddd7d8e80fc856b",
  measurementId: "G-0E9E1K5XHY"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);