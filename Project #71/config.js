import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyD-JwWxXyreJegv-mdwecpAcjlT8mGwQPg",
  authDomain: "project-71-f554c.firebaseapp.com",
  projectId: "project-71-f554c",
  storageBucket: "project-71-f554c.appspot.com",
  messagingSenderId: "244588107882",
  appId: "1:244588107882:web:1ca8aba4bdeb16eec3d213"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
