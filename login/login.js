import {signInWithEmailAndPassword,auth} from "../utils.js"


const login_form = document.getElementById("login_form")
const login_btn = document.getElementById("login_btn")

login_form.addEventListener("submit",function(e){
    e.preventDefault()
    console.log("e",e);
    const email  = e.target[0].value
    const password  = e.target[1].value
    console.log("email==>",email);
    console.log("password==>",password);
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location.href="/"
        // ...
      })
      .catch((error) => {
        console.log("user nahi milraha");
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error);
      });
})

