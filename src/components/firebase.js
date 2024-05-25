import firebase from "firebase/compat/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import "firebase/compat/auth";
import "firebase/compat/firestore";
// import  initializeApp   from "firebase";
// import  getFirestore  from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9rOTxJ8TpnAeiR2OEhitIrlVDdbpDa0M",
  authDomain: "clone-20f5b.firebaseapp.com",
  projectId: "clone-20f5b",
  storageBucket: "clone-20f5b.appspot.com",
  messagingSenderId: "977259619750",
  appId: "1:977259619750:web:b9d872f7ca271e68575b67",
  measurementId: "G-FB5M0NXS0T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//firestone is real time db in firebase
const db = firebaseApp.firestore();

//variable to handle sign in
const auth = firebase.auth();

export { auth };
export default { db };
