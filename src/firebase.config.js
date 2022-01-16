import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDzWpXG3Ty53JVJNcH5iy2WBPoCUEJAnWc",
  authDomain: "portfolio-a9327.firebaseapp.com",
  projectId: "portfolio-a9327",
  storageBucket: "portfolio-a9327.appspot.com",
  messagingSenderId: "7546673971",
  appId: "1:7546673971:web:f1a3060ab46b6aed437c46",
  measurementId: "G-TWJGHKNRSW",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const db = getFirestore(app);

export default db;
