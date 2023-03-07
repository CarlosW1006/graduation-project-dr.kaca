
import { app } from './firebase.js';

import { 
    getAuth, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

import { 
    getFirestore, 
    doc, 
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
    // Get articleid
    var ary3 = ary2[0].split('=');
    var articleid = ary3[1];
    console.log(articleid);
}

// Get id from url
if (url.indexOf('?') != -1)
{
    // 分割字串把分割後的字串放進陣列中
    var ary1 = url.split('?');
    // 把後方傳遞的每組資料各自分割
    var ary2 = ary1[1].split('&');
    // Get themeid
    var ary3 = ary2[0].split('=');
    var themeid = ary3[1];
    console.log(themeid);
    // Get articleid
    if (url.includes('articleid')) {
        var ary4 = ary2[1].split('=');
        var articleid = ary4[1];
        console.log(articleid);
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

        // document.getElementById('c5_user').innerHTML = user.email;

        // 新增(疊加)資料
        async function addDocument() {
            await addDoc(collection(db, 'articles', themeid, 'theme1articles', articleid, 'replies'), {
                uid: user.uid,
                email: user.email,
                reply: document.getElementById('c5_reply').value,
                updatedAt: Date()
            })
        }
        let input = document.getElementById('c5_reply');
        input.addEventListener('keyup', (e) => {
            if(e.keyCode === 13) {
                addDocument();
                console.log("Submit msg success");
                setTimeout("window.location.reload();", 1000);
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

        let input = document.getElementById('c5_reply');
        input.addEventListener('keyup', (e) => {
            if(e.keyCode === 13) {
                alert("留言回覆，請先登入會員!");
            }
        })
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

// Get article data
async function getSingleDoc() {
    const docRef = doc(db, 'articles', themeid, 'theme1articles', articleid);
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const c5t = document.querySelector('#c5_title');
        let title = document.createElement('span');
        title.textContent = docSnap.data().title;
        c5t.appendChild(title);

        const c5d = document.querySelector('#c5_date');
        let date = document.createElement('span');
        date.textContent = docSnap.data().updatedAt;
        c5d.appendChild(date);

        const c5c = document.querySelector('#c5_content');
        let content = document.createElement('span');
        content.textContent = docSnap.data().content;
        c5c.appendChild(content);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
document.innerHtml = getSingleDoc();

// Get reply data
async function getData() {
    const q = query(collection(db, 'articles', themeid, 'theme1articles', articleid, 'replies'));
    const snapshot = await getDocs(q);

    snapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, "=>", doc.data().email);

        const list = document.querySelector('#c5_list');
        let li = document.createElement('li');
        let email = document.createElement('button');
        let br = document.createElement('br');
        let reply = document.createElement('span');
        let brr = document.createElement('br');
        let brrr = document.createElement('br');

        li.setAttribute('msgId', doc.id);
        li.setAttribute('style', 'list-style: none;');
        email.textContent = doc.data().email;
        reply.textContent = doc.data().reply;

        email.style.background = '#9ECDCA';
        email.style.width = '100%';
        email.style.height = '50px';
        email.style.border = 'none';
        email.style.borderRadius = '6px';
        email.style.color = '#ffff';
        email.style.marginBottom = '10px';

        list.appendChild(li);
        li.appendChild(email);
        li.appendChild(br);
        li.appendChild(reply);
        li.appendChild(brr);
        li.appendChild(brrr);
    })
}
document.innerHTML = getData();
