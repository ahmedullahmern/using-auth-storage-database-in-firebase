import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword ,
    signOut,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyB9VRtdobLFN7AtYlEZfh3aaNpWyZDBv8s",
    authDomain: "my-first-project-dbd0a.firebaseapp.com",
    projectId: "my-first-project-dbd0a",
    storageBucket: "my-first-project-dbd0a.appspot.com",
    messagingSenderId: "166122349391",
    appId: "1:166122349391:web:ad6faba54c2810b3badb3a",
    measurementId: "G-GCZP6Y8CJ5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export {
    auth,
    db,
    storage,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    doc,
    setDoc,
    getStorage,
    ref,
    uploadBytes,
    signInWithEmailAndPassword ,
    signOut,
    getDownloadURL,
    getDoc 
}