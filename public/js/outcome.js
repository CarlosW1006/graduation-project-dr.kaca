
import { app } from './firebase.js';

import { 
    getAuth, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

import { 
    getFirestore, 
    doc, 
    setDoc, 
    addDoc, 
    collection, 
    query, 
    getDocs, 
    getDoc
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Set session
const auth = getAuth(app);
// const user = auth.currentUser;

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

        // 用戶頭項
        getDoc(doc(db, 'users', user.uid)).then(docSnap => {
            if(docSnap.exists()) {
                let sex = docSnap.data().sex;

                if(sex=="女性"){
                    document.getElementById("head").src = 'image/female.png';
                } else if(sex=="男性"){
                    document.getElementById("head").src = 'image/male.png';
                } else{
                    document.getElementById("head").src = 'image/user.png';
                }

                let username = docSnap.data().username;
                document.getElementById('user').innerHTML = username;
            } else {
                console.log.log("No such document!");
            }
        })

        console.log(localStorage.getItem('imgurl'));
        document.getElementById("myimg").src = localStorage.getItem('imgurl');
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

// 圓餅圖
const ctx = document.querySelector('#myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [localStorage.getItem('firstIndex'), localStorage.getItem('secondIndex'), localStorage.getItem('thirdIndex')],
        datasets: [{
            // label: '# of Votes',
            data: [localStorage.getItem('w'), localStorage.getItem('ww'), localStorage.getItem('www')],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)' 
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)' 
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

console.log(localStorage.getItem('firstIndex'));
console.log(localStorage.getItem('w'));

console.log(localStorage.getItem('secondIndex'));
console.log(localStorage.getItem('ww'));

console.log(localStorage.getItem('thirdIndex'));
console.log(localStorage.getItem('www'));
