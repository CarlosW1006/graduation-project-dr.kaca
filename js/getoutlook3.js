
import { app } from './firebase.js';

import { 
    getAuth, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

import { 
    getFirestore, 
    doc, 
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
}

if (url.indexOf('?') != -1)
{
    // 分割字串把分割後的字串放進陣列中
    var ary1 = url.split('?');
    // 把後方傳遞的每組資料各自分割
    var ary2 = ary1[1].split('&');
    // Get recordid
    var ary3 = ary2[0].split('=');
    var recordid = ary3[1];
}

// 褥瘡 第一級 outlook1
async function bedsore1outlook1() {
    const docRef = doc(db, 'wounds', 'Gz6K47w7mGUNaM2levA5');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b1o1 = document.querySelector('#outlook1');
        let outlook1 = document.createElement('span');
        outlook1.textContent = docSnap.data().outlook1;
        b1o1.appendChild(outlook1);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 褥瘡 第一級 outlook2
async function bedsore1outlook2() {
    const docRef = doc(db, 'wounds', 'Gz6K47w7mGUNaM2levA5');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b1o2 = document.querySelector('#outlook2');
        let outlook2 = document.createElement('span');
        outlook2.textContent = docSnap.data().outlook2;
        b1o2.appendChild(outlook2);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 褥瘡 第一級 outlook3
async function bedsore1outlook3() {
    const docRef = doc(db, 'wounds', 'Gz6K47w7mGUNaM2levA5');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b1o3 = document.querySelector('#outlook3');
        let outlook3 = document.createElement('span');
        outlook3.textContent = docSnap.data().outlook3;
        b1o3.appendChild(outlook3);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

// 褥瘡 第二級 outlook1
async function bedsore2outlook1() {
    const docRef = doc(db, 'wounds', 'T3JGxRsVzw0ykBgXv8sw');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b2o1 = document.querySelector('#outlook1');
        let outlook1 = document.createElement('span');
        outlook1.textContent = docSnap.data().outlook1;
        b2o1.appendChild(outlook1);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 褥瘡 第二級 outlook2
async function bedsore2outlook2() {
    const docRef = doc(db, 'wounds', 'T3JGxRsVzw0ykBgXv8sw');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b2o2 = document.querySelector('#outlook2');
        let outlook2 = document.createElement('span');
        outlook2.textContent = docSnap.data().outlook2;
        b2o2.appendChild(outlook2);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 褥瘡 第二級 outlook3
async function bedsore2outlook3() {
    const docRef = doc(db, 'wounds', 'T3JGxRsVzw0ykBgXv8sw');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b2o3 = document.querySelector('#outlook3');
        let outlook3 = document.createElement('span');
        outlook3.textContent = docSnap.data().outlook3;
        b2o3.appendChild(outlook3);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

// 褥瘡 第三級 outlook1
async function bedsore3outlook1() {
    const docRef = doc(db, 'wounds', 'VY7PSN1DYHADvNx82JaX');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b3o1 = document.querySelector('#outlook1');
        let outlook1 = document.createElement('span');
        outlook1.textContent = docSnap.data().outlook1;
        b3o1.appendChild(outlook1);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 褥瘡 第三級 outlook2
async function bedsore3outlook2() {
    const docRef = doc(db, 'wounds', 'VY7PSN1DYHADvNx82JaX');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b3o2 = document.querySelector('#outlook2');
        let outlook2 = document.createElement('span');
        outlook2.textContent = docSnap.data().outlook2;
        b3o2.appendChild(outlook2);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 褥瘡 第三級 outlook3
async function bedsore3outlook3() {
    const docRef = doc(db, 'wounds', 'VY7PSN1DYHADvNx82JaX');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b3o3 = document.querySelector('#outlook3');
        let outlook3 = document.createElement('span');
        outlook3.textContent = docSnap.data().outlook3;
        b3o3.appendChild(outlook3);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

// 褥瘡 第四級 outlook1
async function bedsore4outlook1() {
    const docRef = doc(db, 'wounds', 'fOrjRYLg3iM604dHaiaq');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b4o1 = document.querySelector('#outlook1');
        let outlook1 = document.createElement('span');
        outlook1.textContent = docSnap.data().outlook1;
        b4o1.appendChild(outlook1);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 褥瘡 第四級 outlook2
async function bedsore4outlook2() {
    const docRef = doc(db, 'wounds', 'fOrjRYLg3iM604dHaiaq');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b4o2 = document.querySelector('#outlook2');
        let outlook2 = document.createElement('span');
        outlook2.textContent = docSnap.data().outlook2;
        b4o2.appendChild(outlook2);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 褥瘡 第四級 outlook3
async function bedsore4outlook3() {
    const docRef = doc(db, 'wounds', 'fOrjRYLg3iM604dHaiaq');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b4o3 = document.querySelector('#outlook3');
        let outlook3 = document.createElement('span');
        outlook3.textContent = docSnap.data().outlook3;
        b4o3.appendChild(outlook3);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

// 糖尿病足 outlook1
async function dmfootoutlook1() {
    const docRef = doc(db, 'wounds', 'h1MGm2w9BLgB6Gq3uDYb');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const dmo1 = document.querySelector('#outlook1');
        let outlook1 = document.createElement('span');
        outlook1.textContent = docSnap.data().outlook1;
        dmo1.appendChild(outlook1);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 糖尿病足 outlook2
async function dmfootoutlook2() {
    const docRef = doc(db, 'wounds', 'h1MGm2w9BLgB6Gq3uDYb');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const dmo2 = document.querySelector('#outlook2');
        let outlook2 = document.createElement('span');
        outlook2.textContent = docSnap.data().outlook2;
        dmo2.appendChild(outlook2);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 糖尿病足 outlook3
async function dmfootoutlook3() {
    const docRef = doc(db, 'wounds', 'h1MGm2w9BLgB6Gq3uDYb');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const dmo3 = document.querySelector('#outlook3');
        let outlook3 = document.createElement('span');
        outlook3.textContent = docSnap.data().outlook3;
        dmo3.appendChild(outlook3);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

// 結膜炎 outlook1
async function pinkeyeoutlook1() {
    const docRef = doc(db, 'wounds', 'renVjmSYUgnPUmSasBAf');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const peo1 = document.querySelector('#outlook1');
        let outlook1 = document.createElement('span');
        outlook1.textContent = docSnap.data().outlook1;
        peo1.appendChild(outlook1);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 結膜炎 outlook2
async function pinkeyeoutlook2() {
    const docRef = doc(db, 'wounds', 'renVjmSYUgnPUmSasBAf');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const peo2 = document.querySelector('#outlook2');
        let outlook2 = document.createElement('span');
        outlook2.textContent = docSnap.data().outlook2;
        peo2.appendChild(outlook2);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 結膜炎 outlook3
async function pinkeyeoutlook3() {
    const docRef = doc(db, 'wounds', 'renVjmSYUgnPUmSasBAf');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const peo3 = document.querySelector('#outlook3');
        let outlook3 = document.createElement('span');
        outlook3.textContent = docSnap.data().outlook3;
        peo3.appendChild(outlook3);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // location.href = './index.html';
        // ...

        let realrecordid = localStorage.getItem('realrecordid');

        // Get record data
        getDoc(doc(db, 'users', memberid, 'records', realrecordid)).then(docSnap => {
            if (docSnap.exists()) {
                let firstIndex = docSnap.data().firstIndex;

                if(firstIndex=="褥瘡 第一級"){
                    document.innerHtml = bedsore1outlook1();
                    document.innerHtml = bedsore1outlook2();
                    document.innerHtml = bedsore1outlook3();
                }else if(firstIndex=="褥瘡 第二級"){
                    document.innerHtml = bedsore2outlook1();
                    document.innerHtml = bedsore2outlook2();
                    document.innerHtml = bedsore2outlook3();
                }else if(firstIndex=="褥瘡 第三級"){
                    document.innerHtml = bedsore3outlook1();
                    document.innerHtml = bedsore3outlook2();
                    document.innerHtml = bedsore3outlook3();
                }else if(firstIndex=="褥瘡 第四級"){
                    document.innerHtml = bedsore4outlook1();
                    document.innerHtml = bedsore4outlook2();
                    document.innerHtml = bedsore4outlook3();
                }else if(firstIndex=="糖尿病足"){
                    document.innerHtml = dmfootoutlook1();
                    document.innerHtml = dmfootoutlook2();
                    document.innerHtml = dmfootoutlook3();
                }else{
                    document.innerHtml = pinkeyeoutlook1();
                    document.innerHtml = pinkeyeoutlook2();
                    document.innerHtml = pinkeyeoutlook3();
                }

            } else {
              console.log("No such document!");
            }
          })
        
    } else {
        console.log("No such document!");
    }
})