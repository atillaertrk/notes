import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB5ItCmxlznuTV2tuJIdy1k9sKkhhYy9gY",
  authDomain: "dairy-88bb1.firebaseapp.com",
  databaseURL: "https://dairy-88bb1-default-rtdb.firebaseio.com",
  projectId: "dairy-88bb1",
  storageBucket: "dairy-88bb1.appspot.com",
  messagingSenderId: "610245494851",
  appId: "1:610245494851:web:feb641588046157c6facf6"
};


firebase.initializeApp(firebaseConfig)
const db= firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp
const auth=firebase.auth()

export {db, timeStamp, auth}