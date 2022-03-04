import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyD3xChQTTgJDW9Fiv8XddObAyBkTEoeCY4",
  authDomain: "vet-website-b87a8.firebaseapp.com",
  projectId: "vet-website-b87a8",
  storageBucket: "vet-website-b87a8.appspot.com",
  messagingSenderId: "277351104878",
  appId: "1:277351104878:web:6d8b1050a40539e548417f",
  measurementId: "G-WPS68TZTVL"
});

const emailText = document.querySelector('#loginEmail');
const passwordText = document.querySelector('#loginPass');
const loginForm = document.querySelector('#login');
const errorMessageDOM = document.querySelector('.form-error');

const auth = getAuth(firebaseApp);

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('click')
  const email = emailText.value;
  const password = passwordText.value;

  signIn(email, password)
})

onAuthStateChanged(auth, (user) => {
  if (user) {
  } else {
      console.log('no user is signed in')
  }
});

const signIn = (email, password) => {
  signInWithEmailAndPassword (auth, email, password)
  .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      console.log(`${user.email} has signed in!`);

      window.location.href = "/adminHome";
      // ...
  })
  .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log(`${errorCode}: ${errorMessage}`)
      errorMessageDOM.innerHTML = 'Incorrect Credentials';
      errorMessageDOM.style.visibility = 'visible';
      errorMessageDOM.style.display = 'block';
      // ..
  });
}