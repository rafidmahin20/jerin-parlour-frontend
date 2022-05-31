// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtttrDMilQ5pLJ7yoxHKQpwVV3NRuhtMo",
  authDomain: "jerins-parlour-7e106.firebaseapp.com",
  projectId: "jerins-parlour-7e106",
  storageBucket: "jerins-parlour-7e106.appspot.com",
  messagingSenderId: "638823635437",
  appId: "1:638823635437:web:e0f8dba7fa30e37f54afe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth