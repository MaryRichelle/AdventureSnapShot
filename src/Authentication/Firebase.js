import {  getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAt_rwtlht-FOz4opSRta6xCRjGpBjFkko",
  authDomain: "image-gallery-312d1.firebaseapp.com",
  projectId: "image-gallery-312d1",
  storageBucket: "image-gallery-312d1.appspot.com",
  messagingSenderId: "image-gallery-312d1.appspot.com",
  appId: "1:730756095305:web:fc080c3a57651a5d540e98",
  measurementId: "G-0NTG11XYB7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()