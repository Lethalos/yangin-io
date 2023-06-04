import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcxJeAcvx5i8Gf0xUdYTkWLnuvA03hNek",
  authDomain: "yanginio-4d185.firebaseapp.com",
  projectId: "yanginio-4d185",
  storageBucket: "yanginio-4d185.appspot.com",
  messagingSenderId: "863647716983",
  appId: "1:863647716983:web:be4e3f8739656af1061872",
  measurementId: "G-HELFLW74GS",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
