import firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_CONFIG_apiKey,
    authDomain: process.env.REACT_APP_FIREBASE_CONFIG_authDomain,
    databaseURL: process.env.REACT_APP_FIREBASE_CONFIG_databaseURL,
    projectId: process.env.REACT_APP_FIREBASE_CONFIG_projectId,
    storageBucket: process.env.REACT_APP_FIREBASE_CONFIG_storageBucket,
    messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIG_messagingSenderId,
    appId: process.env.REACT_APP_FIREBASE_CONFIG_appId
}


export const firestore = firebase.initializeApp(config).firestore();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
//export const app = firebase.initializeApp(config);
