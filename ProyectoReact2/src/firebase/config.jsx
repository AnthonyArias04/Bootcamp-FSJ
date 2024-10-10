// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9O8hwTNKZv7YNImF8Qs253V9O9NCFHd0",
  authDomain: "app-productos-boot.firebaseapp.com",
  projectId: "app-productos-boot",
  storageBucket: "app-productos-boot.appspot.com",
  messagingSenderId: "648521967527",
  appId: "1:648521967527:web:45ffb7ab399fcc0826b882"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);