
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
    // HTML <img> => 矩陣 tensor
    const tfImg = tf.browser.fromPixels(imgElement, 3);
    // 調整圖像長寬比
    const smalImg = tf.image.resizeBilinear(tfImg, [360, 360]);
    let tensor = smalImg.reshape([1, 360, 360, 3]);
    // 預測執行
    let pred = model.predict(tensor);
    let result = pred.dataSync();
    console.log(result);
    // 取得陣列中最大值
    const {predNum, prob} = findMaxIndex(result);
    console.log(predNum, prob);
    // 取得陣列中第二大值
    const {predNum2, prob2} = findSecIndex(result);
    console.log(predNum2, prob2);
    // 取得陣列中第三大值
    const {predNum3, prob3} = findThdIndex(result);
    console.log(predNum3, prob3);
    // 控制prob浮點位數長度
    w = parseFloat(prob).toFixed(3);
    ww = parseFloat(prob2).toFixed(3);
    www = parseFloat(prob3).toFixed(3);
    localStorage.setItem('w', w);
    localStorage.setItem('ww', ww);
    localStorage.setItem('www', www);
    // 輸出firstIndex
    if(predNum==0){
        localStorage.setItem('firstIndex', "褥瘡 第一級");
    }else if(predNum==1){
        localStorage.setItem('firstIndex', "褥瘡 第二級");
    }else if(predNum==2){
        localStorage.setItem('firstIndex', "褥瘡 第三級");
    }else if(predNum==3){
        localStorage.setItem('firstIndex', "褥瘡 第四級");
    }else if(predNum==4){
        localStorage.setItem('firstIndex', "糖尿病足");
    }else{
        localStorage.setItem('firstIndex', "結膜炎");
    }
    // 輸出secondIndex
    if(predNum2==0){
        localStorage.setItem('secondIndex', "褥瘡 第一級");
    }else if(predNum2==1){
        localStorage.setItem('secondIndex', "褥瘡 第二級");
    }else if(predNum2==2){
        localStorage.setItem('secondIndex', "褥瘡 第三級");
    }else if(predNum2==3){
        localStorage.setItem('secondIndex', "褥瘡 第四級");
    }else if(predNum2==4){
        localStorage.setItem('secondIndex', "糖尿病足");
    }else{
        localStorage.setItem('secondIndex', "結膜炎");
    }
    // 輸出thirdIndex
    if(predNum3==0){
        localStorage.setItem('thirdIndex', "褥瘡 第一級");
    }else if(predNum3==1){
        localStorage.setItem('thirdIndex', "褥瘡 第二級");
    }else if(predNum3==2){
        localStorage.setItem('thirdIndex', "褥瘡 第三級");
    }else if(predNum3==3){
        localStorage.setItem('thirdIndex', "褥瘡 第四級");
    }else if(predNum3==4){
        localStorage.setItem('thirdIndex', "糖尿病足");
    }else{
        localStorage.setItem('thirdIndex', "結膜炎");
    }
    
    setTimeout("location.href = 'outcome.html';", 5000);
}

console.log(localStorage.getItem('firstIndex'));
console.log(localStorage.getItem('w'));

console.log(localStorage.getItem('secondIndex'));
console.log(localStorage.getItem('ww'));

console.log(localStorage.getItem('thirdIndex'));
console.log(localStorage.getItem('www'));
