import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDerJvL8on8WJprhEeuvkLyVdcPPDxtq94",
  authDomain: "login-auth-d1c79.firebaseapp.com",
  projectId: "login-auth-d1c79",
  storageBucket: "login-auth-d1c79.appspot.com",
  messagingSenderId: "1096272385683",
  appId: "1:1096272385683:web:1975ef5f58f208d7b29f66",
  measurementId: "G-JVFYDCCPPW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
