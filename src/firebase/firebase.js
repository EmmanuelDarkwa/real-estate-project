import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD0GdhNcRr04NmmlkzMvQycJPZ4WkQpiMA",
    authDomain: "real-estate-5012d.firebaseapp.com",
    projectId: "real-estate-5012d",
    storageBucket: "real-estate-5012d.appspot.com",
    messagingSenderId: "271898328823",
    appId: "1:271898328823:web:f276f4182be9e2535e1df2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export const db = getFirestore(app);
export { app, auth }