import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDLQX88gSZnMjYbIJrYyEnEhsAx_y15jQg",
  authDomain: "intkit.firebaseapp.com",
  databaseURL: "https://intkit.firebaseio.com",
  projectId: "intkit",
  storageBucket: "intkit.appspot.com",
  messagingSenderId: "648703118477",
  appId: "1:648703118477:web:8b099e08f15ff8c768a6c4",
  measurementId: "G-R7B39VPD0R",
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
