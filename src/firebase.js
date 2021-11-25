import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBjbMR7z3AAsgrb9WPEG5ts1FRuDyqVLw",
  authDomain: "talk-to-people-d137e.firebaseapp.com",
  projectId: "talk-to-people-d137e",
  storageBucket: "talk-to-people-d137e.appspot.com",
  messagingSenderId: "441713023488",
  appId: "1:441713023488:web:2caaa50107156b31d756e5",
  measurementId: "G-Q0H677MRL3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;
