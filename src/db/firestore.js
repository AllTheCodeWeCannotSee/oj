import firebase from 'firebase/app';
import 'firebase/firestore';

export const firebaseConfig = {
    databaseURL: "https://online-judge-ebadd-default-rtdb.firebaseio.com",
    apiKey: "AIzaSyCySjyySoPlmzTpD_lNhOLrxL8fm-Zn8UQ",
    authDomain: "online-judge-ebadd.firebaseapp.com",
    projectId: "online-judge-ebadd",
    storageBucket: "online-judge-ebadd.appspot.com",
    messagingSenderId: "268734171015",
    appId: "1:268734171015:web:2abdc89af7c37f054b3522",
    measurementId: "G-FVG7YB4DS7"
};
export default firebase.initializeApp(firebaseConfig).firestore();
