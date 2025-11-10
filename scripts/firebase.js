// scripts/firebase.js
// Firebase Configuration (UDPN Chat)

const firebaseConfig = {
  apiKey: "AIzaSyDjt8sx0NSrSju7JnGq36RERZNY8uamScc",
  authDomain: "udpnchat.firebaseapp.com",
  databaseURL: "https://udpnchat-default-rtdb.firebaseio.com",
  projectId: "udpnchat",
  storageBucket: "udpnchat.firebasestorage.app",
  messagingSenderId: "1006055561503",
  appId: "1:1006055561503:web:b543dc4ac8f2e6cbf1b82a",
  measurementId: "G-W6FGT46QWT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase references
const auth = firebase.auth();
const database = firebase.database();

