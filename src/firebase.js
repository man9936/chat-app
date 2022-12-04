import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAdjbSMQVzQUTdQdG_R6lTyjDQ-SzfaqXc",
  authDomain: "chat-app-16b25.firebaseapp.com",
  projectId: "chat-app-16b25",
  storageBucket: "chat-app-16b25.appspot.com",
  messagingSenderId: "935213871268",
  appId: "1:935213871268:web:7bbee543d75ffd13c07631"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()