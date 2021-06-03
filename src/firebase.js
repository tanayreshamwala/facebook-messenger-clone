import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCydSE-dMPXMTgTPqh5uKUQYg6VRW8pAOU",
  authDomain: "facebook-messenger-clone-2bae2.firebaseapp.com",
  projectId: "facebook-messenger-clone-2bae2",
  storageBucket: "facebook-messenger-clone-2bae2.appspot.com",
  messagingSenderId: "850899190441",
  appId: "1:850899190441:web:cad930a24c8103210b9fb8",
  measurementId: "G-9JTVZYLHYY",
});

const db = firebaseApp.firestore();

export default db;
