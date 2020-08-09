import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAKjcLV_piyAlyEW5mQ_26vNw4YLU8itJM",
    authDomain: "irrigation-7757b.firebaseapp.com",
    databaseURL: "https://irrigation-7757b.firebaseio.com",
    projectId: "irrigation-7757b",
    storageBucket: "irrigation-7757b.appspot.com",
    messagingSenderId: "584162249709",
    appId: "1:584162249709:web:f187d61269ed7548bdb5e4",
    measurementId: "G-95HNTXFW8G"
  };    
const fire = firebase.initializeApp(firebaseConfig);

export default fire;