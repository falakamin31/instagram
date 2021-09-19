import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyAfoi-gu-t47UPMqpqea1ryerwMhuktFk0",
    authDomain: "instagram-8e5ce.firebaseapp.com",
    projectId: "instagram-8e5ce",
    storageBucket: "instagram-8e5ce.appspot.com",
    messagingSenderId: "990625086005",
    appId: "1:990625086005:web:1e58ef5766b1eb68470f7c",
    measurementId: "G-FVVQLJT0VN"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
console.log("fir basse");

export { firebase, FieldValue };