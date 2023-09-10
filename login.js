import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
const auth = getAuth();
const database =getDatabase();
const login = () => {
    let email = document.getElementById("login=email");
    let password = document.getElementById("login-password");
    if (email==="ayeshaashraf0091@gmail.com"&&password === "Strong#2023") {
      location.href="student.html"
    }else{
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((resolve) => {
    location.href="attendance.html"
    alert("Sucessfully login");
    // ...
  })
  .catch((reject) => {
   alert("reject")
    // ..
  });
}

}
let loginbtn = document.getElementById("login-btn");
loginbtn.addEventListener("click",login);