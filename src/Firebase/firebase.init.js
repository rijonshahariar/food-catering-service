
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCARMrsLV0fObFlYcExtNC-CSLfsYNI_Oo",
    authDomain: "aahar1.firebaseapp.com",
    projectId: "aahar1",
    storageBucket: "aahar1.appspot.com",
    messagingSenderId: "279028521797",
    appId: "1:279028521797:web:f25abc7418e728f8a9fc2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;