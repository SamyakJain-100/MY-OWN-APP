import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDuyVMproTsH88soBAgLvZdvtpPUWIqQHw",
  authDomain: "booksanta-63c5c.firebaseapp.com",
  databaseURL: "https://booksanta-63c5c.firebaseio.com",
  projectId: "booksanta-63c5c",
  storageBucket: "booksanta-63c5c.appspot.com",
  messagingSenderId: "697464204928",
  appId: "1:697464204928:web:0917aa7c33e79794d6c065"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
