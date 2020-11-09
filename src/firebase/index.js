import firebase from "firebase/app";
import { firebaseConfig } from "./dbConfig";
import "firebase/firestore";

// Initialize firebase app
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
