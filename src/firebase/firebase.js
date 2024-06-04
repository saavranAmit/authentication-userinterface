// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzu-aB4xNuQ_I223yuTUuQT-x1dJjLCXo",
    authDomain: "authentication-f6a80.firebaseapp.com",
    projectId: "authentication-f6a80",
    storageBucket: "authentication-f6a80.appspot.com",
    messagingSenderId: "609309407078",
    appId: "1:609309407078:web:2f840262d4a843c88b3aa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };