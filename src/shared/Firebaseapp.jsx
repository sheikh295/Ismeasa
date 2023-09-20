import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCyIddHZBmWUypcpf8DO2yRvdfySJHKJZY",
    authDomain: "ismeasa.firebaseapp.com",
    projectId: "ismeasa",
    storageBucket: "ismeasa.appspot.com",
    messagingSenderId: "691255114897",
    appId: "1:691255114897:web:bf251f05e7b54d31ed9330",
    databaseURL: 'https://ismeasa-default-rtdb.firebaseio.com/'
  };

  export const fbapp = initializeApp(firebaseConfig);