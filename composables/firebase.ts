import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOzWCzLqgtG9Fd1zgU-iAZlxqBpN6fBSo",
  authDomain: "gram-30b3c.firebaseapp.com",
  databaseURL: "https://gram-30b3c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gram-30b3c",
  storageBucket: "gram-30b3c.appspot.com",
  messagingSenderId: "636825478066",
  appId: "1:636825478066:web:652c6f97df9fca0c50baab"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { storage, db };
