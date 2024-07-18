import { auth, storage, db, onAuthStateChanged, signOut, getDoc, doc } from "./utils.js"

// console.log("auth==>",auth);
// console.log("storage==>",storage);
// console.log("db==>",db);

const user_img = document.getElementById("user_img")

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        getUserInfo(uid)
    } else {
        window.location.href = '/login/login.html'
        // User is signed out
        // ...
    }
});

const Signout_btn = document.getElementById("Signout_btn")

Signout_btn.addEventListener("click", () => {
    signOut(auth)
})

function getUserInfo(uid) {
    const userRef = doc(db, "users", uid)
    getDoc(userRef).then((data) => {
        user_img.src = data.data().img
    })
}

