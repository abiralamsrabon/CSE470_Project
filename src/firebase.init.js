// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKDbAZFbQiUkcDpiwBCV9FmvPJcvmkL50",
  authDomain: "showhouse-c16a6.firebaseapp.com",
  projectId: "showhouse-c16a6",
  storageBucket: "showhouse-c16a6.appspot.com",
  messagingSenderId: "389209514248",
  appId: "1:389209514248:web:00d80069391ec576924cbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;