import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBx2avlzy-FLbeqbPwUfWk0FrYWBnHaNFY",
    authDomain: "todo-list-b157a.firebaseapp.com",
    databaseURL: "https://todo-list-b157a.firebaseio.com",
    projectId: "todo-list-b157a",
    storageBucket: "",
    messagingSenderId: "153942173117",
    appId: "1:153942173117:web:1f8f35c03ed49b91ba9ed4"
}


export const firestore = firebase.initializeApp(config).firestore();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
//export const app = firebase.initializeApp(config);
