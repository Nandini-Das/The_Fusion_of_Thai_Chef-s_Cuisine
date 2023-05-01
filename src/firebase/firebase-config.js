// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3VRuf1LxXyrT2pr14ijssIhiq35hiX-Q",
  authDomain: "the-fusion-of-chef-s-recipe.firebaseapp.com",
  projectId: "the-fusion-of-chef-s-recipe",
  storageBucket: "the-fusion-of-chef-s-recipe.appspot.com",
  messagingSenderId: "13144018150",
  appId: "1:13144018150:web:508f5935c6621c47f5ff27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;