// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCE8zeAJbD1_P6og8z-fGSg8IYmng2nWhQ",
    authDomain: "whats-app-clone-d00a5.firebaseapp.com",
    projectId: "whats-app-clone-d00a5",
    storageBucket: "whats-app-clone-d00a5.appspot.com",
    messagingSenderId: "71294457637",
    appId: "1:71294457637:web:9858797641ce6e1603eccc",
    measurementId: "G-L5NZEYSMJ7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;