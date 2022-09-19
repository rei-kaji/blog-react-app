// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLsZDgTtz8Mxj4cdMoYksfbprw0-ONg3M",
  authDomain: "blog-app-5333.firebaseapp.com",
  projectId: "blog-app-5333",
  storageBucket: "blog-app-5333.appspot.com",
  messagingSenderId: "327584327554",
  appId: "1:327584327554:web:755fe7ffb4d1f2bd69519b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
