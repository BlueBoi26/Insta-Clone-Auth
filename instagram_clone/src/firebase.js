import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk3Pci3dH6uLqcERGy43AroSkxfaNCfEA",
  authDomain: "instagram-clone-a2a62.firebaseapp.com",
  projectId: "instagram-clone-a2a62",
  storageBucket: "instagram-clone-a2a62.appspot.com",
  messagingSenderId: "455279463124",
  appId: "1:455279463124:web:a8dc2002ad5acc8df28941"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();