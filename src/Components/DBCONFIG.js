import firebase from "firebase";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {};
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);
const DB_CONFIG = Firebase.database().ref("data");
export const storage = Firebase.storage();
export default DB_CONFIG;
