// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {doc, getDoc} from firebase/Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC-i5qlnkkmj1634Ctho5CXhPzkkdD8Hw",
  authDomain: "react-ecommerce-ccbeb.firebaseapp.com",
  projectId: "react-ecommerce-ccbeb",
  storageBucket: "react-ecommerce-ccbeb.appspot.com",
  messagingSenderId: "890544319731",
  appId: "1:890544319731:web:9db7ebfa1beccbb6a3db86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//obtener producto

export async function getSingleProduct(id){
    constdocumentRef = doc(db, 'items', id);

    try{
        const snapshot = await getDoc(documentRef);
        return snapshot.data();
    }catch(error){
        console.error("Error al obtener el documento: ', +error)");


    }
    
}