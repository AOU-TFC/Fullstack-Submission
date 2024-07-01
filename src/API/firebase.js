import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgAn3GnpjoZ8J_uWa7207-E0qWxQDJqqk",
  authDomain: "fullstack-submit.firebaseapp.com",
  projectId: "fullstack-submit",
  storageBucket: "fullstack-submit.appspot.com",
  messagingSenderId: "10199574585",
  appId: "1:10199574585:web:864bbaac6e2fdd214bc5e8",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};