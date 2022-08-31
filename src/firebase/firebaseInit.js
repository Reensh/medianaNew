import firebase from "firebase/app"
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAF0Kp_WKspI8a9iyNIKFiSnPyOpDVtaHk",
    authDomain: "firemedianayt.firebaseapp.com",
    projectId: "firemedianayt",
    storageBucket: "firemedianayt.appspot.com",
    messagingSenderId: "574293825710",
    appId: "1:574293825710:web:3f7b7b96b46415392a353f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export{ timestamp };
  export default firebaseApp.firestore();
