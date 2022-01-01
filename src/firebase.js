import { GoogleAuthProvider, signInWithPopup, getAuth, signOut} from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDZdgAulW-virNpXtH7XXYrr0XRlp9SHCM",
  authDomain: "bruh-chat-25463.firebaseapp.com",
  projectId: "bruh-chat-25463",
  storageBucket: "bruh-chat-25463.appspot.com",
  messagingSenderId: "738058023283",
  appId: "1:738058023283:web:f9eae82884b68495c11506",
  measurementId: "G-H8TRQ0693E"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export const auth = getAuth();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).catch(
      (err) => {
    console.log(err.message);
  })
}

export const signOutApp = () => {
  signOut(auth);
}

export const getUser = () => {
  return getAuth().currentUser;
}

export default db;

