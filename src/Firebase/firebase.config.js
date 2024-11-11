import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUw4-HDqAvfpM64G0o4vkI5wWeF4uiRTc",
  authDomain: "real-stick-home-deails.firebaseapp.com",
  projectId: "real-stick-home-deails",
  storageBucket: "real-stick-home-deails.firebasestorage.app",
  messagingSenderId: "203809381072",
  appId: "1:203809381072:web:d0da12d8ba481486be9cd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;