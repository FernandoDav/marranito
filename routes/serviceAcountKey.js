// En un archivo JavaScript de tu frontend (por ejemplo, app.js o firebaseClient.js)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Importa otros servicios que necesites
// import { getAuth } from "firebase/auth";
// import { getDatabase, ref, get, push } from "firebase/database";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWnWn-E6qfy40Gsf_nnUSbRfFaA83Ctlk",
  authDomain: "marranito-de3f8.firebaseapp.com",
  databaseURL: "https://marranito-de3f8-default-rtdb.firebaseio.com",
  projectId: "marranito-de3f8",
  storageBucket: "marranito-de3f8.firebasestorage.app",
  messagingSenderId: "865514412130",
  appId: "1:865514412130:web:aa55e4eee71ce568d9193b",
  measurementId: "G-2JL26T9ZYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Puedes exportar 'app' y otros servicios si los necesitas en otros archivos del frontend
// export { app, analytics, getAuth, getDatabase, ref, get, push, getFirestore, getStorage };