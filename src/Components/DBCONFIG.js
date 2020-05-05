import firebase from "firebase/firebase";
import "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "book-55e06.firebaseapp.com",
  databaseURL: "https://book-55e06.firebaseio.com",
  projectId: "book-55e06",
  storageBucket: "book-55e06.appspot.com",
  messagingSenderId: "670300519833",
  appId: "1:670300519833:web:c3cb7070716b4bc376a708",
  measurementId: "G-0XZYHB40QP",
};
const Firebase = firebase.initializeApp(firebaseConfig);
const DB_CONFIG = Firebase.database().ref("data");
export const storage = firebase.storage();
export default DB_CONFIG;
