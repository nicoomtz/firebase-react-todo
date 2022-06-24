// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByZXoxtF7QjQpzJqTnS_0mrM5bQG5Fw1I",
  authDomain: "fir-react-c3249.firebaseapp.com",
  projectId: "fir-react-c3249",
  storageBucket: "fir-react-c3249.appspot.com",
  messagingSenderId: "259363625149",
  appId: "1:259363625149:web:6c941a3ad87a95ff6b7fd4",
  measurementId: "G-3NWMP1899K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }