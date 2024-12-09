// Initialize Firebase App
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyBqMfRIf-DiALBtvMWsUy05LluPLGzxv_c",
    authDomain: "nanded-cea3f.firebaseapp.com",
    databaseURL: "https://nanded-cea3f-default-rtdb.firebaseio.com",
    projectId: "nanded-cea3f",
    storageBucket: "nanded-cea3f.appspot.com",
    messagingSenderId: "309717841051",
    appId: "1:309717841051:web:253f8a29e77ea90ef3023e",
    measurementId: "G-RBR4MEJ238"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function sendData(value) {
    const dbRef = ref(database, 'buttonData');
    set(dbRef, { value })
        .then(() => console.log('Data sent successfully!'))
        .catch((error) => console.error('Error sending data:', error));
}

document.getElementById("button1").addEventListener("click", () => {
    sendData(1);
});

document.getElementById("button2").addEventListener("click", () => {
    sendData(0);
});
