import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC1841-Lnft1jSXAV9e8leImTl4jP9ra24",
  authDomain: "tatoo-nine.firebaseapp.com",
  projectId: "tatoo-nine",
  databaseURL:
    "https://tatoo-nine-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "tatoo-nine.appspot.com",
  messagingSenderId: "627649833511",
  appId: "1:627649833511:web:858b79a793a3bc9039fc02",
  measurementId: "G-00YL8T7MWZ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database();
