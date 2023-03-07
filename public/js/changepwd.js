
import { app } from './firebase.js';

import { 
    getAuth, 
    onAuthStateChanged, 
    signOut, 
    sendPasswordResetEmail 
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

import { 
    getFirestore 
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Set session
const auth = getAuth(app);
const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // location.href = './index.html';
        // ...
        console.log(user.uid);
        // 登入/註冊按鈕隱藏
        const logreg = document.querySelector('#logreg');
        logreg.style.display = "none";

        // 修改密碼
        document.getElementById('change').addEventListener('click', function () {
            sendPasswordResetEmail(auth, user.email)
            .then(() => {
                // Password reset email sent!
                // ..
                alert("驗證信件已寄發至您的電子信箱!");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode + errorMessage);
                alert(errorCode + errorMessage);
            });
        })

    } else {
        // User is signed out
        // ...
        console.log("no user");
        // 登出按鈕隱藏
        const logout = document.querySelector('#logout');
        logout.style.display = "none";
        // 會員資料按鈕隱藏
        const self = document.querySelector('#self');
        self.style.display = "none";

        alert("請先登入會員帳號!");
        location.href = './front.html';
    }
})

// Sign out function
document.getElementById('logout').addEventListener('click', function () {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("Logout success");
        alert("Logout success");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode + errorMessage);
        alert(errorCode + errorMessage);
    })
})
