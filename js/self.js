
import { app } from './firebase.js';

import { 
    getAuth, 
    onAuthStateChanged, 
    signOut, 
    deleteUser 
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc 
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

        // Get data
        document.getElementById('uid').innerHTML = uid;
        document.getElementById('email').innerHTML = user.email;

        async function getSingleDoc() {
            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const na = document.querySelector('#name');
                let name = document.createElement('span');
                name.textContent = docSnap.data().username;
                na.appendChild(name);
                document.getElementById("name").value = docSnap.data().username;

                const se = document.querySelector('#sex');
                let sex = document.createElement('span');
                sex.textContent = docSnap.data().sex;
                se.appendChild(sex);
                document.getElementById("sex").value = docSnap.data().sex;

                const br = document.querySelector('#birth');
                let birth = document.createElement('span');
                birth.textContent = docSnap.data().birthdate;
                br.appendChild(birth);
                document.getElementById("birth").value = docSnap.data().birthdate;

                const di = document.querySelector('#disease');
                let disease = document.createElement('span');
                disease.textContent = docSnap.data().disease;
                di.appendChild(disease);
                document.getElementById("disease").value = docSnap.data().disease;

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        document.innerHtml = getSingleDoc();

        // 新增(覆寫)資料(ex.會員資料修改)
        async function setDocument() {
            await setDoc(doc(db, 'users', user.uid), {
                username: document.getElementById('name').value,
                sex: document.getElementById('sex').value,
                birthdate: document.getElementById('birth').value,
                disease: document.getElementById('disease').value
            })
        }
        document.getElementById('save').addEventListener('click', function () {
            setDocument();
            alert("資料修改完成");
        })

        // 刪除帳號
        document.getElementById('delete').onclick = function() {
            if (confirm("確定要刪除此帳號?")) {
                deleteUser(user).then(() => {
                    // User deleted.
                    // ..
                    alert("已成功刪除");
                    location.href = './login.html';
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    console.log(errorCode + errorMessage);
                    alert(errorCode + errorMessage);
                });
            } else {
                alert("已取消刪除");
            }
        }
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
