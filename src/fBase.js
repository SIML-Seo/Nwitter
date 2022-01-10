import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAHVEd9Acj76S7KkDm6_nXzplN1AuEIDko",
  authDomain: "nwitter-4e2b8.firebaseapp.com",
  databaseURL: "https://nwitter-4e2b8-default-rtdb.firebaseio.com",
  projectId: "nwitter-4e2b8",
  storageBucket: "nwitter-4e2b8.appspot.com",
  messagingSenderId: "989179895666",
  appId: "1:989179895666:web:7139c5856837c2ddb5c7eb",
  measurementId: "G-51B4359MYC",
};

const app = initializeApp(firebaseConfig);
export default app;
const analytics = getAnalytics(app);

export const authService = getAuth();
export const dbService = getFirestore();
export const storageService = getStorage();
