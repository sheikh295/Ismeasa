import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyBWZpJEPqCOdnFwhK8HoO5N2lAXceVtKyY",
    authDomain: "increasa-409e3.firebaseapp.com",
    projectId: "increasa-409e3",
    storageBucket: "increasa-409e3.appspot.com",
    messagingSenderId: "1017500695690",
    appId: "1:1017500695690:web:8bb06227d67efd2ab28173",
    databaseURL: 'https://increasa-409e3-default-rtdb.firebaseio.com/'
  };

  export const fbapp = initializeApp(firebaseConfig);