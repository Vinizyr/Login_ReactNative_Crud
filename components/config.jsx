// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsf4NNVqvxEzrzl1p5JiNMYG64H4Aw5WA",
  authDomain: "firestore-crud-b0e8d.firebaseapp.com",
  projectId: "firestore-crud-b0e8d",
  storageBucket: "firestore-crud-b0e8d.appspot.com",
  messagingSenderId: "839007213301",
  appId: "1:839007213301:web:20e448ffacd12a7ec997bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Iniciando o firestore 
export const db = getFirestore(app)