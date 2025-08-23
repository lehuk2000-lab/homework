// scripts/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeknM8tnc_iwZD6kZO5PtTQNlnwZDcsNk",
  authDomain: "homework-c9856.firebaseapp.com",
  projectId: "homework-c9856",
  storageBucket: "homework-c9856.appspot.com",
  messagingSenderId: "311478945480",
  appId: "1:311478945480:web:2bce7ce956cde6adeb07fd",
  measurementId: "G-P4DCMD556D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
