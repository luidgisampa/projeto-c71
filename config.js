import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDaMKnezKF2zMx0LlNZkLz8EkbAJgfu-MI",
  authDomain: "pro-71-a17ef.firebaseapp.com",
  databaseURL: "https://pro-71-a17ef-default-rtdb.firebaseio.com",
  projectId: "pro-71-a17ef",
  storageBucket: "pro-71-a17ef.appspot.com",
  messagingSenderId: "817337212813",
  appId: "1:817337212813:web:cfd19b6effaff89e6fa7c4"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
