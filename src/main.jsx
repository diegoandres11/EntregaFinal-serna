import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_fS87YctP8tBFrO-ZSVnffCwObSZAXKY",
  authDomain: "proyecto-coder-19f51.firebaseapp.com",
  projectId: "proyecto-coder-19f51",
  storageBucket: "proyecto-coder-19f51.appspot.com",
  messagingSenderId: "501658138881",
  appId: "1:501658138881:web:e764757d4076b6a8df8300"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
