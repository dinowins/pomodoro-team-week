import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAxsM0GAPR16OgZyz_j7ZDBso_rpKKoioU",
   authDomain: "pomodoro-e857a.firebaseapp.com",
   databaseURL: "https://pomodoro-e857a.firebaseio.com",
   projectId: "pomodoro-e857a",
   storageBucket: "pomodoro-e857a.appspot.com",
   messagingSenderId: "948060685167",
   appId: "1:948060685167:web:a350841c9cb5c184"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase
