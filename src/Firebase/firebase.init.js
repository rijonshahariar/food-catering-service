// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-KQ2QcaoKGdpSGueddEethRlsm14Bfso",
    authDomain: "rijons-kitchen.firebaseapp.com",
    projectId: "rijons-kitchen",
    storageBucket: "rijons-kitchen.appspot.com",
    messagingSenderId: "362306596971",
    appId: "1:362306596971:web:1d1ac10c193e5db023812e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;