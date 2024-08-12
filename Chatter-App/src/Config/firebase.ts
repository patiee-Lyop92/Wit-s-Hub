// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { Firestore, getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZvTtxKgnEjnaPKGmfnqGGITNmQSXXtFA",
  authDomain: "chatter-app-f9255.firebaseapp.com",
  projectId: "chatter-app-f9255",
  storageBucket: "chatter-app-f9255.appspot.com",
  messagingSenderId: "251277526930",
  appId: "1:251277526930:web:25276eaa8cf7afe19aa34b",
  measurementId: "G-NN393VRKZ5"
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)