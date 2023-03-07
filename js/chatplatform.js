
import { app } from './firebase.js';

import { 
    getAuth, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

import { 
    getFirestore, 
    addDoc, 
    collection, 
    query, 
    getDocs 
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
    // Get themeid
    var ary3 = ary2[0].split('=');
    var themeid = ary3[1];
    console.log(themeid);
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

        document.getElementById('writebtn').addEventListener('click', function () {
            document.querySelector(".popup").style.display = "block";
            document.querySelector("#closebtn").addEventListener("click", function(){
                document.querySelector(".popup").style.display = "none";
            });
        })

        async function addArticle1() {
            await addDoc(collection(db, 'articles', themeid, 'theme1articles'), {
                uid: user.uid,
                title: document.getElementById('title').value,
                content: document.getElementById('content').value,
                updatedAt: Date()
            })
        }
        async function addArticle2() {
            await addDoc(collection(db, 'articles', themeid, 'theme2articles'), {
                uid: user.uid,
                title: document.getElementById('title').value,
                content: document.getElementById('content').value,
                updatedAt: Date()
            })
        }

        document.getElementById('submit').addEventListener('click', function () {
            if(themeid=='4vgBxENvZOyWcthPQoba'){
                addArticle1();
                alert("文章分享成功");
                setTimeout("location.href = 'chatplatform.html?themeid=4vgBxENvZOyWcthPQoba';", 500);
            } else{
                addArticle2();
                alert("文章分享成功");
                setTimeout("location.href = 'chatplatform.html?themeid=O54Po30s978jdj6xUQhl';", 500);
            }
            // addArticle1();
            // alert("文章分享成功");
            // setTimeout("location.href = 'chatplatform.html';", 500);
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

        document.getElementById('writebtn').addEventListener('click', function () {
            alert("發表文章，請先登入會員!");
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

// Get data
if(themeid=='4vgBxENvZOyWcthPQoba'){
    document.innerHTML = getData1();
} else{
    document.innerHTML = getData2();
}

async function getData1() {
    const q = query(collection(db, 'articles', themeid, 'theme1articles'));
    const snapshot = await getDocs(q);

    snapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, "=>", doc.data().title);

        const list = document.querySelector('#articlelist');
        let li = document.createElement('li');
        let title = document.createElement('button');
        let content = document.createElement("button");
        // likeimg.setAttribute('src', 'image/heart.png');
        let br = document.createElement('br');
        let brr = document.createElement('br');
        let brrr = document.createElement('br');

        title.style.background = '#9ECDCA';
        title.style.color = '#ffff';
        title.style.borderColor = '#41c6bd';
        title.style.borderRadius = '4px';
        title.style.height = '50px';
        title.style.width = '100%';
        title.style.fontSize = '25px';
        title.style.fontWeight = 'bold';

        content.style.background = '#9ECDCA';
        content.style.color = '#ffff';
        content.style.border = 'none';
        content.style.height = '65px';
        content.style.width = '99.9%';
        content.style.fontSize = '20px';
        content.style.whiteSpace = 'nowrap';
        content.style.overflow = 'hidden';
        content.style.textOverflow = 'ellipsis';

        li.setAttribute('docid', doc.id);
        li.setAttribute('style', 'list-style: none;');
        title.textContent = doc.data().title;
        title.onclick = function() {
            location.href = './article.html' + '?themeid=' + themeid + '&articleid=' + doc.id;
        }
        content.textContent = doc.data().content;


        list.appendChild(li);
        li.appendChild(title);
        li.appendChild(br);
        li.appendChild(content);
        li.appendChild(brr);
        li.appendChild(brrr);
    })
}

async function getData2() {
    const q = query(collection(db, 'articles', themeid, 'theme2articles'));
    const snapshot = await getDocs(q);

    snapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, "=>", doc.data().title);

        const list = document.querySelector('#articlelist');
        let li = document.createElement('li');
        let title = document.createElement('button');
        let content = document.createElement("button");
        // likeimg.setAttribute('src', 'image/heart.png');
        let br = document.createElement('br');
        let brr = document.createElement('br');
        let brrr = document.createElement('br');

        title.style.background = '#9ECDCA';
        title.style.color = '#ffff';
        title.style.borderColor = '#41c6bd';
        title.style.borderRadius = '4px';
        title.style.height = '50px';
        title.style.width = '100%';
        title.style.fontSize = '25px';
        title.style.fontWeight = 'bold';

        content.style.background = '#9ECDCA';
        content.style.color = '#ffff';
        content.style.border = 'none';
        content.style.height = '65px';
        content.style.width = '99.9%';
        content.style.fontSize = '20px';
        content.style.whiteSpace = 'nowrap';
        content.style.overflow = 'hidden';
        content.style.textOverflow = 'ellipsis';

        li.setAttribute('docid', doc.id);
        li.setAttribute('style', 'list-style: none;');
        title.textContent = doc.data().title;
        title.onclick = function() {
            location.href = './article.html' + '?articleid=' + doc.id;
        }
        content.textContent = doc.data().content;


        list.appendChild(li);
        li.appendChild(title);
        li.appendChild(br);
        li.appendChild(content);
        li.appendChild(brr);
        li.appendChild(brrr);
    })
}
