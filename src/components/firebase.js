import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0a15jpQeFVcjQwK7Mc0BDcOnIi2PnGSY",
  authDomain: "gc-trade-4a1f6.firebaseapp.com",
  projectId: "gc-trade-4a1f6",
  storageBucket: "gc-trade-4a1f6.appspot.com",
  messagingSenderId: "160948568371",
  appId: "1:160948568371:web:68a53ae9ec4116571e7e46",
  measurementId: "G-3GXXHPN7KL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };