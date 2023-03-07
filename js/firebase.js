
// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCtcvO6c7T5jj2oBSsqz76rghjSiqB4PqE",
    authDomain: "kaca-6d465.firebaseapp.com",
    databaseURL: "https://kaca-6d465-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kaca-6d465",
    storageBucket: "kaca-6d465.appspot.com",
    messagingSenderId: "129465958141",
    appId: "1:129465958141:web:32ed54023098bbd1818894",
    measurementId: "G-KHZP58864E",
    databaseURL: "https://kaca-6d465-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
