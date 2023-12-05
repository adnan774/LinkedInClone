import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAMiQESRtU5ny8vDJqYFHBzUHkZEbgSGx4",
    authDomain: "linkedin-clone-e578f.firebaseapp.com",
    projectId: "linkedin-clone-e578f",
    storageBucket: "linkedin-clone-e578f.appspot.com",
    messagingSenderId: "978492560036",
    appId: "1:978492560036:web:a65556dee8dadcd2accc31"
  };

  //initialize the firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };