
import { app } from './firebase.js';

import { 
    getAuth, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

import { 
    getFirestore, 
    addDoc, 
    collection 
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";

import { 
    getStorage, 
    ref, 
    uploadBytesResumable, 
    getDownloadURL 
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-storage.js";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Set session
const auth = getAuth(app);

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

        async function addDocument() {
            var selectFile = document.getElementById('input').files[0];
            var imgname = Date();

            // Create the file metadata
            /** @type {any} */
            const metadata = {
                contentType: 'image/jpeg'
            };
            
            const storage = getStorage();

            // Upload file and metadata to the object 'images/mountains.jpg'
            const storageRef = ref(storage, user.uid + '/' + imgname);
            const uploadTask = uploadBytesResumable(storageRef, selectFile, metadata);
            
            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on('state_changed', (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                    console.log('Upload is paused');
                    break;
                    case 'running':
                    console.log('Upload is running');
                    break;
                }
            }, 
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                    case 'storage/canceled':
                    // User canceled the upload
                    break;

                    // ...

                    case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
                }
            }, 
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    localStorage.setItem('imgurl', downloadURL);
                    
                    addDoc(collection(db, 'users', user.uid, 'records'), {
                        'firstIndex': localStorage.getItem('firstIndex'),
                        'firstValue': localStorage.getItem('w'),
                        'secondIndex': localStorage.getItem('secondIndex'),
                        'secondValue': localStorage.getItem('ww'),
                        'thirdIndex': localStorage.getItem('thirdIndex'),
                        'thirdValue': localStorage.getItem('www'),
                        updatedAt: Date(),
                        imgurl: downloadURL
                    })
                });
            });
        }
        document.getElementById('submit').addEventListener('click', function () {
            addDocument();
            console.log("Submit success");
            alert("Submit success");
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
