import firebase from "firebase";

 const firebaseConfig = {
    apiKey: "AIzaSyCWOIt2AEIyEwfcJtRhsiihd727uymcXUc",
    authDomain: "loginfbgg-2926f.firebaseapp.com",
    databaseURL: "https://loginfbgg-2926f.firebaseio.com",
    projectId: "loginfbgg-2926f",
    storageBucket: "loginfbgg-2926f.appspot.com",
    messagingSenderId: "889739481",
    appId: "1:889739481:web:9e9c5c2872bcd98e7646c8",
    measurementId: "G-M8LDGQC1J7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const providerFB = new firebase.auth.FacebookAuthProvider();
const providerGG = new firebase.auth.GoogleAuthProvider();
// firebase.auth().sendPasswordResetEmail
// const forgotPass = auth.sendPasswordResetEmail();


export {auth, providerGG, providerFB};
export default db;