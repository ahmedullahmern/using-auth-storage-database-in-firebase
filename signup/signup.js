import {
    auth,
    db,
    storage,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    doc,
    setDoc,
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
} from "../utils.js"


const signup_form = document.getElementById("signup_form")
const signup_btn = document.getElementById("signup_btn")

signup_form.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log(e);
    const img = e.target[0].files[0]
    const email = e.target[1].value
    const password = e.target[2].value

    const userInfo = {
        img,
        email,
        password,
    };
    signup_btn.disabled = true 
    signup_btn.innerText = "Loading..." 
    createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            // Signed up 
            // const user = userCredential.user;
            // ...
            console.log("user", user.user.uid);
            const imgRef = ref(storage, `user/${user.user.uid}`)
            uploadBytes(imgRef, img).then(() => {
                console.log("img uploade");
                getDownloadURL(imgRef).then((url) => {
                    console.log("img URL", url);
                    userInfo.img = url
                    const userDbRRef = doc(db, "users", user.user.uid)
                    setDoc(userDbRRef, userInfo).then(() => {
                        console.log("user udated in object");
                        window.location.href = '/'
                        signup_btn.disabled = false 
                        signup_btn.innerText = "signup" 
                    })
                }).catch((err) => {
                    signup_btn.disabled = false 
                    signup_btn.innerText = "signup" 
                    alert(err)
                })
            }).catch((err) => {
                signup_btn.disabled = false 
                signup_btn.innerText = "signup" 
                alert(err)
            })
        })
        .catch((error) => {
            signup_btn.disabled = false 
            signup_btn.innerText = "signup" 
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error)
            // ..
        });
})

