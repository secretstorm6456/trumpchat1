// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyALNIrgO3qmA8AiR8rOhveOYIYOn6H9yUc",
  authDomain: "chat1-bb8c1.firebaseapp.com",
  projectId: "chat1-bb8c1",
  storageBucket: "chat1-bb8c1.appspot.com",
  messagingSenderId: "927851226664",
  appId: "1:927851226664:web:196e948b8149207a75771d",
  measurementId: "G-KD2M7KKFWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();