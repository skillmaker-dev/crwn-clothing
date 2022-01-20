import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC2BakPLsbKaIGBwE7cyQObsTQVkRZe-MI",
    authDomain: "crwn-db-c768a.firebaseapp.com",
    projectId: "crwn-db-c768a",
    storageBucket: "crwn-db-c768a.appspot.com",
    messagingSenderId: "228216999407",
    appId: "1:228216999407:web:dcb56165dca2676188ba1a",
    measurementId: "G-HRZ5MNJTNF"
  };

  firebase.initializeApp(config);

  export const firestore = firebase.firestore();
  export const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;