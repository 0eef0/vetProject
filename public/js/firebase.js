import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';
const firebaseApp = initializeApp({
  apiKey: "AIzaSyD3xChQTTgJDW9Fiv8XddObAyBkTEoeCY4",
  authDomain: "vet-website-b87a8.firebaseapp.com",
  projectId: "vet-website-b87a8",
  storageBucket: "vet-website-b87a8.appspot.com",
  messagingSenderId: "277351104878",
  appId: "1:277351104878:web:6d8b1050a40539e548417f",
  measurementId: "G-WPS68TZTVL"
});
const auth = getAuth(firebaseApp);
const logoutBtn = document.querySelector('#logoutBtn');
console.log('this is a test')
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('user logged in')
  } else {
    console.log('no user is signed in')
    window.location = '/'
  }
});

const logout = () => {
  console.log('log out')
  signOut(auth).then(() => {
      // Sign-out successful.
      console.log('signed out')
      window.location = '/';
  }).catch((error) => {
      // An error happened.
      console.log(error)
  });
}
logoutBtn.addEventListener('click', () => logout())
  
export {
    firebaseApp
}