import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCKB9vYsQcsu1ljxh-cZYevlAOvc7Srkpg",
  authDomain: "linkedinclone-ed4ba.firebaseapp.com",
  projectId: "linkedinclone-ed4ba",
  storageBucket: "linkedinclone-ed4ba.appspot.com",
  messagingSenderId: "894944558537",
  appId: "1:894944558537:web:c4785590754e3ccab1fc18",
  measurementId: "G-Y9Y6PGGPLJ",
};

// use this to initialize the firebase app
const firebaseapp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

// use these for db & auth
const db = firebaseapp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, provider, db, storage };
  
