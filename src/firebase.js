import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCh9dvkEM48WQEIiYKpjuMXE7Tp3BD3EdY",
    authDomain: "facebook-messenger-clone-cf1cc.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-cf1cc.firebaseio.com",
    projectId: "facebook-messenger-clone-cf1cc",
    storageBucket: "facebook-messenger-clone-cf1cc.appspot.com",
    messagingSenderId: "510545314441",
    appId: "1:510545314441:web:62a8c70d30e3c4aa52bc58",
    measurementId: "G-MDYMMET399"
})

const db = firebaseApp.firestore()
export default db