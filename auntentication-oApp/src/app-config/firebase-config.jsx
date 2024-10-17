// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBN5E7GK1ZO98stWWN48Z7TqxpDce_-9o",
  authDomain: "app-auntentication.firebaseapp.com",
  projectId: "app-auntentication",
  storageBucket: "app-auntentication.appspot.com",
  messagingSenderId: "347840999426",
  appId: "1:347840999426:web:a953c43c565b260a48771b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firestore es para una base de datos
//auth es para la autenticacion.

//INDICAMOS QUE SE VA UTILIZAR EL SERVICIO DE LA AUTENTICACION CON LA APP.
const auth_user = getAuth(app);
export default auth_user;