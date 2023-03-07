
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
    // Get recordid
    var ary3 = ary2[0].split('=');
    var recordid = ary3[1];
    console.log(recordid);
    // Get memberid
    if (url.includes('memberid')) {
        var ary4 = ary2[1].split('=');
        var memberid = ary4[1];
        console.log(memberid);
    }
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

        // Add members
        async function addMember() {
            await setDoc(doc(db, 'users', user.uid, 'members', document.getElementById('member').value), {
                memberid: document.getElementById('member').value,
            })
        }
        document.getElementById('add').addEventListener('click', function () {
            addMember();
            console.log("Add member success");
            alert("Add member success");
        })

        // 傳送資料給成員
        async function addDocument() {
            await addDoc(collection(db, 'users', localStorage.getItem('memberid'), 'members', user.uid, 'records'), {
                memberid: user.uid,
                recordid: recordid,
                updatedAt: Date()
            });
        }

        // 抓取成員ID
        async function getMembers() {
            const q = query(collection(db, 'users', user.uid, 'members'));
            const snapshot = await getDocs(q);

            snapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, "=>", doc.data().memberid);
                
                // Create elements
                const list = document.querySelector('#member_list');
                let li = document.createElement('li');
                let member = document.createElement('button');
                let span = document.createElement('span');
                let sendme = document.createElement('button');
                let br = document.createElement('br');

                member.style.background = '#9ECDCA';
                member.style.color = '#ffff';
                member.style.borderColor = '#41c6bd';
                member.style.borderRadius = '4px';
                member.style.height = '37px';
                member.style.marginBottom= '25px';
                member.style.width = '180px';
                member.style.overflow = "hidden";

                sendme.style.background = '#9ECDCA';
                sendme.style.color = '#ffff';
                sendme.style.borderColor = '#41c6bd';
                sendme.style.borderRadius = '4px';
                sendme.style.height = '37px';
                sendme.style.width = '75px';

                // Add functions
                li.setAttribute('memberid', doc.id);
                li.setAttribute('style', 'list-style: none;');
                member.textContent = doc.data().username;
                span.textContent = " ";
                sendme.textContent = "查看";
                member.onclick = function() {
                    member.style.background = '#BEBEBE';
                    member.style.color = '#ffff';
                    member.style.borderColor = '#41c6bd';
                    member.style.borderRadius = '4px';
                    member.style.height = '37px';
                    member.style.marginBottom = '25px';
                    member.style.width = '180px';
                    member.style.overflow = 'hidden';
                    localStorage.setItem('memberid', doc.data().memberid);
                }
                sendme.onclick = function() {
                    location.href = './sendme.html' + '?memberid=' + doc.data().memberid;
                }

                list.appendChild(li);
                li.appendChild(member);
                li.appendChild(span);
                li.appendChild(sendme);
                li.appendChild(br);
            })
        }
        document.innerHTML = getMembers();

        document.getElementById('send').addEventListener('click', function () {
            if (confirm("確定要傳送此紀錄?")) {
                addDocument();
                alert("已成功傳送");
            } else {
                alert("已取消傳送");
            }
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
