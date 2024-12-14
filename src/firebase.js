import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCAvoA6xIj9yV9ZaUnJ_Z6MGMeU__MRyew",
  authDomain: "blog-5013a.firebaseapp.com",
  projectId: "blog-5013a",
  storageBucket: "blog-5013a.firebasestorage.app",
  messagingSenderId: "982002641544",
  appId: "1:982002641544:web:0dd4e378bc371b658f8d3d",
  measurementId: "G-WBT3EEZDRV",
  databaseURL: 'https://blog-5013a-default-rtdb.firebaseio.com'
};

export const app = initializeApp(firebaseConfig);