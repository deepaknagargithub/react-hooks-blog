import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQXZHlN5nhvPl6caWwzpjMPJkf3Ulsodc",
  authDomain: "react-hooks-blog-eb30d.firebaseapp.com",
  projectId: "react-hooks-blog-eb30d",
  storageBucket: "react-hooks-blog-eb30d.appspot.com",
  messagingSenderId: "881344872117",
  appId: "1:881344872117:web:4c4b23d1083cba4a09c8fc",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
