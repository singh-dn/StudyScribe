// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCWe8cVgxALsLWESxf7kdFiFbhYTj4JQtQ",
    authDomain: "campusreach-c57e0.firebaseapp.com",
    projectId: "campusreach-c57e0",
    storageBucket: "campusreach-c57e0.firebasestorage.app",
    messagingSenderId: "294813850577",
    appId: "1:294813850577:web:49cd5cbe8240d486105ef0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
