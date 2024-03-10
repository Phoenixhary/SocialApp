// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 // import firebase from 'firebase';
 import { initializeApp } from 'firebase/app';
 import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBWjYHIV_B5RWawCbDT1KMglAkC_NdlYD4",
    authDomain: "socialapp-e864c.firebaseapp.com",
    databaseURL:" https://socialapp-e864c-default-rtdb.firebaseio.com",
    projectId: "socialapp-e864c",
    storageBucket: "socialapp-e864c.appspot.com",
    messagingSenderId: "288765317014",
    appId: "1:288765317014:web:e3d17e17c05e852592d7b7",
    measurementId: "G-2SYXGLEN35"
  };

  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);


 // const db = firebaseApp.firestore();

  export { database }