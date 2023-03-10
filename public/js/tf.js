
async function init(){
    model = await tf.loadLayersModel('./models1102/model.json');
    console.log('load model..');
}

function submit(){
    const selectFile = document.getElementById('input').files[0];
    console.log(selectFile);
    let reader = new FileReader();
    reader.onload = e =>{
        let img = document.createElement('img');
        img.src = e.target.result;
        img.width = 360;
        // img.height = 360;
        img.onload = () =>{
            const showImage = document.getElementById('showImage');
            showImage.innerHTML = '';
            showImage.appendChild(img);
            predict(img);
        }
    }
    reader.readAsDataURL(selectFile);
}

function findMaxIndex(result){
    const arr = Array.from(result);
    let maxIndex = 0;
    let maxValue = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>maxValue){
            maxIndex = i;
            maxValue = arr[i];
            localStorage.setItem('prob', maxValue);
        }
    }
    return {predNum: maxIndex, prob: maxValue};
}

function findSecIndex(result){
    const arr = Array.from(result);
    let maxIndex = 0;
    let maxValue = 0;
    let secIndex = 0;
    let secValue = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>maxValue){
            secIndex = maxIndex;
            secValue = maxValue;
            maxIndex = i;
            maxValue = arr[i];
        }else if(arr[i]>secValue && arr[i]!=maxValue && i!=maxIndex){
            secIndex = i;
            secValue = arr[i];
            localStorage.setItem('prob2', secValue);
        }
    }
    return {predNum2: secIndex, prob2: secValue};
}

function findThdIndex(result){
    const arr = Array.from(result);
    let maxIndex = 0;
    let maxValue = 0;
    let secIndex = 0;
    let secValue = 0;
    let thdIndex = 0;
    let thdValue = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>maxValue){
            secIndex = maxIndex;
            secValue = maxValue;
            maxIndex = i;
            maxValue = arr[i];
        }else if(arr[i]>secValue && arr[i]!=maxValue && i!=maxIndex){
            thdIndex = secIndex;
            thdValue = secValue;
            secIndex = i;
            secValue = arr[i];
        }else if(arr[i]>thdValue && arr[i]!=secValue && i!=secIndex){
            thdIndex = i;
            thdValue = arr[i];
        }
    }
    return {predNum3: thdIndex, prob3: thdValue};
}

function predict(imgElement){
    // HTML <img> => ?????? tensor
    const tfImg = tf.browser.fromPixels(imgElement, 3);
    // ?????????????????????
    const smalImg = tf.image.resizeBilinear(tfImg, [360, 360]);
    let tensor = smalImg.reshape([1, 360, 360, 3]);
    // ????????????
    let pred = model.predict(tensor);
    let result = pred.dataSync();
    console.log(result);
    // ????????????????????????
    const {predNum, prob} = findMaxIndex(result);
    console.log(predNum, prob);
    // ???????????????????????????
    const {predNum2, prob2} = findSecIndex(result);
    console.log(predNum2, prob2);
    // ???????????????????????????
    const {predNum3, prob3} = findThdIndex(result);
    console.log(predNum3, prob3);
    // ??????prob??????????????????
    w = parseFloat(prob).toFixed(3);
    ww = parseFloat(prob2).toFixed(3);
    www = parseFloat(prob3).toFixed(3);
    localStorage.setItem('w', w);
    localStorage.setItem('ww', ww);
    localStorage.setItem('www', www);
    // ??????firstIndex
    if(predNum==0){
        localStorage.setItem('firstIndex', "?????? ?????????");
    }else if(predNum==1){
        localStorage.setItem('firstIndex', "?????? ?????????");
    }else if(predNum==2){
        localStorage.setItem('firstIndex', "?????? ?????????");
    }else if(predNum==3){
        localStorage.setItem('firstIndex', "?????? ?????????");
    }else if(predNum==4){
        localStorage.setItem('firstIndex', "????????????");
    }else{
        localStorage.setItem('firstIndex', "?????????");
    }
    // ??????secondIndex
    if(predNum2==0){
        localStorage.setItem('secondIndex', "?????? ?????????");
    }else if(predNum2==1){
        localStorage.setItem('secondIndex', "?????? ?????????");
    }else if(predNum2==2){
        localStorage.setItem('secondIndex', "?????? ?????????");
    }else if(predNum2==3){
        localStorage.setItem('secondIndex', "?????? ?????????");
    }else if(predNum2==4){
        localStorage.setItem('secondIndex', "????????????");
    }else{
        localStorage.setItem('secondIndex', "?????????");
    }
    // ??????thirdIndex
    if(predNum3==0){
        localStorage.setItem('thirdIndex', "?????? ?????????");
    }else if(predNum3==1){
        localStorage.setItem('thirdIndex', "?????? ?????????");
    }else if(predNum3==2){
        localStorage.setItem('thirdIndex', "?????? ?????????");
    }else if(predNum3==3){
        localStorage.setItem('thirdIndex', "?????? ?????????");
    }else if(predNum3==4){
        localStorage.setItem('thirdIndex', "????????????");
    }else{
        localStorage.setItem('thirdIndex', "?????????");
    }
    
    setTimeout("location.href = 'outcome.html';", 5000);
}

console.log(localStorage.getItem('firstIndex'));
console.log(localStorage.getItem('w'));

console.log(localStorage.getItem('secondIndex'));
console.log(localStorage.getItem('ww'));

console.log(localStorage.getItem('thirdIndex'));
console.log(localStorage.getItem('www'));
