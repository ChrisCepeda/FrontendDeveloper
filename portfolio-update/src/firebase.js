
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALRr19lSUUv0FlVAj03y5gPncb5ljk5X4",
  authDomain: "mail-form-609ce.firebaseapp.com",
  projectId: "mail-form-609ce",
  storageBucket: "mail-form-609ce.appspot.com",
  messagingSenderId: "677848016447",
  appId: "1:677848016447:web:95288a6bd82fd52c03ba8a"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;