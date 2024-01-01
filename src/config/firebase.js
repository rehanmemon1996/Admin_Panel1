
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firestore } from "firebase/firestore";
//  import {getAuth} from 'firebase/auth'
 import {getDatabase} from 'firebase/database'
import { getStorage } from "firebase/storage";


    const firebaseConfig = {
        apiKey: "AIzaSyDB_USXrxcHbrqEnWOUJPxUsvFSAG4ok28",
        authDomain: "reactnative-88b92.firebaseapp.com",
        databaseURL: "https://reactnative-88b92-default-rtdb.firebaseio.com",
        projectId: "reactnative-88b92",
        storageBucket: "reactnative-88b92.appspot.com",
        messagingSenderId: "507965985282",
        appId: "1:507965985282:web:839030cfc9c9b725ebcd1b",
        measurementId: "G-TLMPTJYLFC"
      };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)

export const db=getDatabase(app)




