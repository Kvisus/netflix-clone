// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5sR9hxpjZW6rETjf28hsSZhVfcY45p4M",
  authDomain: "netflix-clone-e3c70.firebaseapp.com",
  projectId: "netflix-clone-e3c70",
  storageBucket: "netflix-clone-e3c70.appspot.com",
  messagingSenderId: "420275701679",
  appId: "1:420275701679:web:a9e58295dea872d3a8115a",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore();
const auth = getAuth();

export default app 
export {auth, db}
