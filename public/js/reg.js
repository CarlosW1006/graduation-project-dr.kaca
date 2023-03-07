
import { app } from './firebase.js';

import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

import { 
    getFirestore, 
    doc, 
    setDoc, 
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";

// Sign up function
document.getElementById('signup').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('pwd').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode + errorMessage);
        // alert(errorCode + errorMessage);
    });
})

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Set session
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log(user.uid);
        async function setDocument() {
            await setDoc(doc(db, 'users', user.uid), {
                username: document.getElementById('name').value,
                email: user.email,
                password: document.getElementById('pwd').value,
                birthdate: document.getElementById('birth').value
            })
        }
        document.getElementById('signup').addEventListener('click', function () {
            setDocument();
            console.log("Sign up success");
            alert("Sign up success");
        })
        // setTimeout("location.href = 'login.html';", 5000);
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
    }
})