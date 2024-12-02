// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOKMZ9gGNs268uE9J-ywkELf86-_pJU_k",
  authDomain: "coffee-store-a065e.firebaseapp.com",
  projectId: "coffee-store-a065e",
  storageBucket: "coffee-store-a065e.firebasestorage.app",
  messagingSenderId: "267057038921",
  appId: "1:267057038921:web:ef1895ca67b28aa926a198"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;