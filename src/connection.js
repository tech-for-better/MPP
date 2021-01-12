// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// import firebase from "firebase/app";

var firebase = require("firebase/app");

// Add the Firebase services that you want to use
require("firebase/auth");
require("firebase/firestore");

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = process.env.REACT_APP_firebase_config;

// Initialize Firebase
let fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(fire);
const auth = firebase.auth;

export { fire, db, auth };
