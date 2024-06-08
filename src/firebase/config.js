import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "restaurant-management-sy-ff538.firebaseapp.com",
  databaseURL:
    "https://restaurant-management-sy-ff538-default-rtdb.firebaseio.com/",
  projectId: "restaurant-management-sy-ff538",
  storageBucket: "restaurant-management-sy-ff538.appspot.com",
  messagingSenderId: "583001331039",
  appId: "1:583001331039:web:5b662d761235dd7fd352ea",
  measurementId: "G-WNNDWK9GLN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
