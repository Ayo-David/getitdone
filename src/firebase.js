const firebaseConfig = {
    apiKey: "AIzaSyA4VwbnZzG-PiuvFos_iijGR3tHm6cEQH4",
    authDomain: "getitdone-7a002.firebaseapp.com",
    projectId: "getitdone-7a002",
    storageBucket: "getitdone-7a002.appspot.com",
    messagingSenderId: "406232342216",
    appId: "1:406232342216:web:a2d6ce338bc1d7491f8ffd",
    measurementId: "G-1V13QR54EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.firestore();

export { db }