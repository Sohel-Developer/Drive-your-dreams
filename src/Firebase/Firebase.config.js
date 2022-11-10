// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAytLpqGgD1TL9AgW7bK5Cs0ENdRFepXM0",
  authDomain: "driving-your-drems.firebaseapp.com",
  projectId: "driving-your-drems",
  storageBucket: "driving-your-drems.appspot.com",
  messagingSenderId: "666811108541",
  appId: "1:666811108541:web:76e81fcd4dd99db6edfbd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;