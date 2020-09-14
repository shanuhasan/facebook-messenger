import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAt20AmcxDnKxBhu6p1mCW7RVnUcVmXHYY",
    authDomain: "facebook-messenger-ab907.firebaseapp.com",
    databaseURL: "https://facebook-messenger-ab907.firebaseio.com",
    projectId: "facebook-messenger-ab907",
    storageBucket: "facebook-messenger-ab907.appspot.com",
    messagingSenderId: "596601586224",
    appId: "1:596601586224:web:2de3bce0995fd513a823f5",
    measurementId: "G-4J10341HZL"
});

const db = firebaseApp.firestore();

export default db;