import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.apiKey,
    databaseURL: process.env.apiKey,
    projectId: process.env.apiKey,
    storageBucket: process.env.apiKey,
    messagingSenderId: process.env.apiKey,
    appId: process.env.apiKey,
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase