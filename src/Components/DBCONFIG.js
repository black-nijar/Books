import firebase from 'firebase'
// Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyD0dJzHunmZzdtiwVhHfiWq4ZE87bfUO3I",
  authDomain: "book-55e06.firebaseapp.com",
  databaseURL: "https://book-55e06.firebaseio.com",
  projectId: "book-55e06",
  storageBucket: "book-55e06.appspot.com",
  messagingSenderId: "670300519833",
  appId: "1:670300519833:web:c3cb7070716b4bc376a708",
  measurementId: "G-0XZYHB40QP"
};
const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;