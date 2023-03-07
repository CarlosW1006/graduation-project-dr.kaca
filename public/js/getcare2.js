
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
    // Get recordid
    var ary3 = ary2[0].split('=');
    var recordid = ary3[1];
}

// 褥瘡 第一級 care1
async function bedsore1care1() {
    const docRef = doc(db, 'wounds', 'Gz6K47w7mGUNaM2levA5');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b1c1 = document.querySelector('#care1');
        let care1 = document.createElement('span');
        care1.textContent = docSnap.data().care1;
        b1c1.appendChild(care1);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 褥瘡 第一級 care2
async function bedsore1care2() {
    const docRef = doc(db, 'wounds', 'Gz6K47w7mGUNaM2levA5');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b1c2 = document.querySelector('#care2');
        let care2 = document.createElement('span');
        care2.textContent = docSnap.data().care2;
        b1c2.appendChild(care2);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 褥瘡 第一級 care3
async function bedsore1care3() {
    const docRef = doc(db, 'wounds', 'Gz6K47w7mGUNaM2levA5');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b1c3 = document.querySelector('#care3');
        let care3 = document.createElement('span');
        care3.textContent = docSnap.data().care3;
        b1c3.appendChild(care3);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

// 褥瘡 第二級 care1
async function bedsore2care1() {
    const docRef = doc(db, 'wounds', 'T3JGxRsVzw0ykBgXv8sw');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b2c1 = document.querySelector('#care1');
        let care1 = document.createElement('span');
        care1.textContent = docSnap.data().care1;
        b2c1.appendChild(care1);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 褥瘡 第二級 care2
async function bedsore2care2() {
    const docRef = doc(db, 'wounds', 'T3JGxRsVzw0ykBgXv8sw');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b2c2 = document.querySelector('#care2');
        let care2 = document.createElement('span');
        care2.textContent = docSnap.data().care2;
        b2c2.appendChild(care2);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 褥瘡 第二級 care3
async function bedsore2care3() {
    const docRef = doc(db, 'wounds', 'T3JGxRsVzw0ykBgXv8sw');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b2c3 = document.querySelector('#care3');
        let care3 = document.createElement('span');
        care3.textContent = docSnap.data().care3;
        b2c3.appendChild(care3);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

// 褥瘡 第三級 care1
async function bedsore3care1() {
    const docRef = doc(db, 'wounds', 'VY7PSN1DYHADvNx82JaX');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b3c1 = document.querySelector('#care1');
        let care1 = document.createElement('span');
        care1.textContent = docSnap.data().care1;
        b3c1.appendChild(care1);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 褥瘡 第三級 care2
async function bedsore3care2() {
    const docRef = doc(db, 'wounds', 'VY7PSN1DYHADvNx82JaX');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b3c2 = document.querySelector('#care2');
        let care2 = document.createElement('span');
        care2.textContent = docSnap.data().care2;
        b3c2.appendChild(care2);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 褥瘡 第三級 care3
async function bedsore3care3() {
    const docRef = doc(db, 'wounds', 'VY7PSN1DYHADvNx82JaX');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b3c3 = document.querySelector('#care3');
        let care3 = document.createElement('span');
        care3.textContent = docSnap.data().care3;
        b3c3.appendChild(care3);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

// 褥瘡 第四級 care1
async function bedsore4care1() {
    const docRef = doc(db, 'wounds', 'fOrjRYLg3iM604dHaiaq');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b4c1 = document.querySelector('#care1');
        let care1 = document.createElement('span');
        care1.textContent = docSnap.data().care1;
        b4c1.appendChild(care1);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 褥瘡 第四級 care2
async function bedsore4care2() {
    const docRef = doc(db, 'wounds', 'fOrjRYLg3iM604dHaiaq');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b4c2 = document.querySelector('#care2');
        let care2 = document.createElement('span');
        care2.textContent = docSnap.data().care2;
        b4c2.appendChild(care2);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 褥瘡 第四級 care3
async function bedsore4care3() {
    const docRef = doc(db, 'wounds', 'fOrjRYLg3iM604dHaiaq');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const b4c3 = document.querySelector('#care3');
        let care3 = document.createElement('span');
        care3.textContent = docSnap.data().care3;
        b4c3.appendChild(care3);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

// 糖尿病足 care1
async function dmfootcare1() {
    const docRef = doc(db, 'wounds', 'h1MGm2w9BLgB6Gq3uDYb');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const dmc1 = document.querySelector('#care1');
        let care1 = document.createElement('span');
        care1.textContent = docSnap.data().care1;
        dmc1.appendChild(care1);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 糖尿病足 care2
async function dmfootcare2() {
    const docRef = doc(db, 'wounds', 'h1MGm2w9BLgB6Gq3uDYb');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const dmc2 = document.querySelector('#care2');
        let care2 = document.createElement('span');
        care2.textContent = docSnap.data().care2;
        dmc2.appendChild(care2);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 糖尿病足 care3
async function dmfootcare3() {
    const docRef = doc(db, 'wounds', 'h1MGm2w9BLgB6Gq3uDYb');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const dmc3 = document.querySelector('#care3');
        let care3 = document.createElement('span');
        care3.textContent = docSnap.data().care3;
        dmc3.appendChild(care3);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

// 結膜炎 care1
async function pinkeyecare1() {
    const docRef = doc(db, 'wounds', 'renVjmSYUgnPUmSasBAf');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const pec1 = document.querySelector('#care1');
        let care1 = document.createElement('span');
        care1.textContent = docSnap.data().care1;
        pec1.appendChild(care1);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 結膜炎 care2
async function pinkeyecare2() {
    const docRef = doc(db, 'wounds', 'renVjmSYUgnPUmSasBAf');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const pec2 = document.querySelector('#care2');
        let care2 = document.createElement('span');
        care2.textContent = docSnap.data().care2;
        pec2.appendChild(care2);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
// 結膜炎 care3
async function pinkeyecare3() {
    const docRef = doc(db, 'wounds', 'renVjmSYUgnPUmSasBAf');
    const docSnap = await getDoc(docRef);

    docSnap.data();
    if (docSnap.exists()) {
        const pec3 = document.querySelector('#care3');
        let care3 = document.createElement('span');
        care3.textContent = docSnap.data().care3;
        pec3.appendChild(care3);
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

        // Get record data
        getDoc(doc(db, 'users', user.uid, 'records', recordid)).then(docSnap => {
            if (docSnap.exists()) {
                let firstIndex = docSnap.data().firstIndex;

                if(firstIndex=="褥瘡 第一級"){
                    document.innerHtml = bedsore1care1();
                    document.innerHtml = bedsore1care2();
                    document.innerHtml = bedsore1care3();
                }else if(firstIndex=="褥瘡 第二級"){
                    document.innerHtml = bedsore2care1();
                    document.innerHtml = bedsore2care2();
                    document.innerHtml = bedsore2care3();
                }else if(firstIndex=="褥瘡 第三級"){
                    document.innerHtml = bedsore3care1();
                    document.innerHtml = bedsore3care2();
                    document.innerHtml = bedsore3care3();
                }else if(firstIndex=="褥瘡 第四級"){
                    document.innerHtml = bedsore4care1();
                    document.innerHtml = bedsore4care2();
                    document.innerHtml = bedsore4care3();
                }else if(firstIndex=="糖尿病足"){
                    document.innerHtml = dmfootcare1();
                    document.innerHtml = dmfootcare2();
                    document.innerHtml = dmfootcare3();
                }else{
                    document.innerHtml = pinkeyecare1();
                    document.innerHtml = pinkeyecare2();
                    document.innerHtml = pinkeyecare3();
                }

            } else {
              console.log("No such document!");
            }
          })
        
    } else {
        console.log("No such document!");
    }
})