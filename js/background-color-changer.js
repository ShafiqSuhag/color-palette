var btn = document.getElementById('btn');
const bodyColor = document.querySelector('.body-bg-color');
var box = document.getElementsByClassName('box');
var boxText = document.getElementsByClassName('box-text');

const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C","D", "E", "F" ];
backgroundColorChangerByHexCode();

// color.getElementsByClassName.l
btn.addEventListener("click",function(){
    // console.log('hello test');
    // document.body.style.backgroundColor = 'blue';
    // bgColor.style.backgroundColor = 'blue';
    // console.log('hello test 2');
    // hexColorChanger();

    console.log('--------------------- Change Color')
    
    backgroundColorChangerByHexCode();
})




function backgroundColorChangerByHexCode(){
    // console.log(bgColor.length)   
    // color.style.backgroundColor = hexColorGenerator();
    var hexCode = hexColorGenerator();
    console.log('--------------------------------------------7')
    bodyColor.style.backgroundColor = hexCode;
    for(j=0; j< box.length ; j++){
        // console.log(hexColorGenerator());
        // console.log('class index' ,j);
        box[j].style.backgroundColor = hexColorGenerator();
        boxText[j].textContent = hexCode;
        // bgColor[i].style.backgroundColor = 'green';
        
    }
    // console.log(bodyColor);
   
}


function hexColorGenerator(){
    
    // console.log('inside hexColorGenerator')
    var hexColorCode = "#";
    
    for(i=0 ; i<6; i++){
        var randVal = randomNumberGenerator();
        console.log('HEX VLA',hex[randVal]);
        console.log('HEX TYPE', typeof hex[randVal]);
        hexColorCode +=  hex[randVal];
        console.log('hexColorCode :',hexColorCode);
        
    }
    console.log('FUnc hexColorGenerator ----------------------------',hexColorCode);
    return hexColorCode;


}
function randomNumberGenerator(){
    
    var randNum =  Math.round(Math.random() * hex.length);
    if(randNum>=16){randNum=15}
    console.log('Rand Index Val',randNum)
    return randNum;
}


function testerFunction() {
    changeColumnColor('body-bg-color','lightblue');
}
function changeColumnColor(column,color) {
    var cols = document.getElementsByClassName(column);
    console.log(cols);
    cols[0].style.backgroundColor = "yellow"
    console.log(cols);
    console.log(cols[0].baseURI);
    // console.log(typeof cols);
    // cols[0].style.backgroundColor = color;
    // console.log(cols.length);
    // for(i=0; i<cols.length; i++) {
    //     console.log(i);
    //   cols[i].style.backgroundColor = color;
    // }
}

