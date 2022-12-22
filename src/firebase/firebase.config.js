// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwTn0PIj99lLQtjUR8LD6_YEupUYXOegQ",
  authDomain: "frii-database.firebaseapp.com",
  projectId: "frii-database",
  storageBucket: "frii-database.appspot.com",
  messagingSenderId: "835613119310",
  appId: "1:835613119310:web:b36081712127e17870041f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;