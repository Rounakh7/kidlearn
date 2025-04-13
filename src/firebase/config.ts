import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database'; // <-- Import Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyAMpsTQWR00MgHtI_uochFOERZUPRAXOp8",
  authDomain: "kidlearn-8d97f.firebaseapp.com",
  projectId: "kidlearn-8d97f",
  storageBucket: "kidlearn-8d97f.firebasestorage.app",
  messagingSenderId: "683745062409",
  appId: "1:683745062409:web:0e2482cf90de853bb492d8",
  measurementId: "G-SE7QZ1VY3V"
};
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app); // <-- Realtime Database
