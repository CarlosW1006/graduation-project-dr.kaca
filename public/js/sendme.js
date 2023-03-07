
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
const user = auth.currentUser;
// Get id from url
const url = location.href;
if (url.indexOf('?') != -1)
{
    // 分割字串把分割後的字串放進陣列中
    var ary1 = url.split('?');
    // 把後方傳遞的每組資料各自分割
    var ary2 = ary1[1].split('&');
    // Get memberid
    var ary3 = ary2[0].split('=');
    var memberid = ary3[1];
    console.log(memberid);
}

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

        // Get member's name
        async function getSingleDoc() {
            const docRef = doc(db, 'users', memberid);
            const docSnap = await getDoc(docRef);

            docSnap.data();
            if (docSnap.exists()) {
                const na = document.querySelector('#title');
                let title = document.createElement('span');
                title.textContent = docSnap.data().username;
                na.appendChild(title);
                document.getElementById("title").value = docSnap.data().username;
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        document.innerHtml = getSingleDoc();

        // Get data
        async function getData() {
            const q = query(collection(db, 'users', user.uid, 'members', memberid, 'records'));
            const snapshot = await getDocs(q);

            snapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, "=>", doc.data().email);
                
                const list = document.querySelector('#record_list');
                let li = document.createElement('li');
                let upd = document.createElement('button');
                let br = document.createElement('br');
                let brr = document.createElement('br');

                upd.style.background = '#9ECDCA';
                upd.style.color = '#ffff';
                upd.style.borderColor = '#41c6bd';
                upd.style.borderRadius = '4px';
                upd.style.height = '37px';
                upd.style.width = '100%';

                li.setAttribute('recordid', doc.id);
                li.setAttribute('style', 'list-style: none;');
                upd.textContent = doc.data().updatedAt;
                upd.onclick = function() {
                    location.href = './outcome3.html' + '?memberid=' + doc.data().memberid + '&recordid=' + doc.id;
                }

                list.appendChild(li);
                li.appendChild(upd);
                li.appendChild(br);
                li.appendChild(brr);
            })
        }
        document.innerHTML = getData();
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
