// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyCK5s8Nz2_8LLVF8bM1K-tnxmC33y3yx0U",
    authDomain: "empresa-t.firebaseapp.com",
    projectId: "empresa-t",
    storageBucket: "empresa-t.appspot.com",
    messagingSenderId: "982324537083",
    appId: "1:982324537083:web:8b8c3c8e4cdab6785b725e",
    measurementId: "G-9JXVQHB53T"
};
// Initialize Firebase
export const appfire = initializeApp(firebaseConfig);

