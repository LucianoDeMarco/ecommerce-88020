import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsT79GBvQDS83ddM6RQltkrYjyBIlnaCE",
  authDomain: "eccomerce-88020.firebaseapp.com",
  projectId: "eccomerce-88020",
  storageBucket: "eccomerce-88020.firebasestorage.app",
  messagingSenderId: "283743096603",
  appId: "1:283743096603:web:143fe1976add50592b8dbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


export default db;