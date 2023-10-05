// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPT5dC0wZhoIbU784R2LaopVMo4KisMb0",
  authDomain: "exchange-app-bc8dd.firebaseapp.com",
  projectId: "exchange-app-bc8dd",
  storageBucket: "exchange-app-bc8dd.appspot.com",
  messagingSenderId: "697611345568",
  appId: "1:697611345568:web:eb50444771daea1407b3c5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)