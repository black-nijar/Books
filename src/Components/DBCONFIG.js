import firebase from 'firebase/firebase'
import 'firebase/storage'
// Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
const Firebase = firebase.initializeApp(firebaseConfig);
const DB_CONFIG = Firebase.database().ref('data')
export const storage = firebase.storage()
export default DB_CONFIG;
