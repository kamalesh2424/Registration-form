import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCK3hge66X0fWm9n4ZZiiWV_D2Rc2Yp9u0",
  authDomain: "regform-ed793.firebaseapp.com",
  projectId: "regform-ed793",
  storageBucket: "regform-ed793.appspot.com",
  messagingSenderId: "965473793419",
  appId: "1:965473793419:web:ed73feb10e851a5bc6eb8e",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const colRef = collection(db, "regform");

const form = document.querySelector(".input-fields");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const gender = document.querySelector("#gender");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const dob = document.querySelector("#dob");
const course = document.querySelector("#course");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addDoc(colRef, {
    firstname: firstname.value,
    lastname: lastname.value,
    gender: gender.value,
    email: email.value,
    password: password.value,
    dob: dob.value,
    course: course.value,
  })
    .then((result) => {
      form.reset();
      alert("Form data submitted!");
    })
    .catch((err) => {
      alert(err);
    });
});
