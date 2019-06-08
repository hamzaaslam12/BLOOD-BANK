import *as firebase from 'firebase';

var Config = {
  apiKey: "AIzaSyDhTfzprgqA1c0ouw63tf79YlOcMNCUVRM",
  authDomain: "studentdetails-c49ba.firebaseapp.com",
  databaseURL: "https://studentdetails-c49ba.firebaseio.com",
  projectId: "studentdetails-c49ba",
  storageBucket: "studentdetails-c49ba.appspot.com",
  messagingSenderId: "1085404763613"
};
firebase.initializeApp(Config);

export default Config;