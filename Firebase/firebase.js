import{initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDu9iYXKhRGZQcq7GluT6lDFYg5e4XKvlM",
  authDomain: "the-indian-school-61d0e.firebaseapp.com",
  databaseURL:"https://the-indian-school-61d0e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "the-indian-school-61d0e",
  storageBucket: "the-indian-school-61d0e.appspot.com",
  messagingSenderId: "936128778437",
  appId: "1:936128778437:web:295f0e4b78f707b03420ac",
  measurementId: "G-2HXJV787N6",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();

export default firebaseConfig;