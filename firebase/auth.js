// auth.js
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Register
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Registration successful!");
    return userCredential.user;
  } catch (error) {
    alert(error.message);
  }
};

// Login
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    return userCredential.user;
  } catch (error) {
    alert(error.message);
  }
};

// Logout
export const logoutUser = async () => {
  await signOut(auth);
  alert("Logged out successfully!");
};
