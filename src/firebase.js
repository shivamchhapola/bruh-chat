import { GoogleAuthProvider, signInWithPopup, getAuth} from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";


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
const auth = getAuth();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then(
    (res) => {
      console.log(res.user)
    }).catch(
      (err) => {
    console.log(err.message);
    })
}

export default db;

