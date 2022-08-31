import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyC1841-Lnft1jSXAV9e8leImTl4jP9ra24",
    authDomain: "tatoo-nine.firebaseapp.com",
    projectId: "tatoo-nine",
    databaseURL:"https://tatoo-nine-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "tatoo-nine.appspot.com",
    messagingSenderId: "627649833511",
    appId: "1:627649833511:web:858b79a793a3bc9039fc02",
    measurementId: "G-00YL8T7MWZ"
  };

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()