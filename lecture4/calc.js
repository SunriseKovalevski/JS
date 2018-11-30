let res = document.getElementsByClassName('viewer');
let result = " ";

var elem = function(element) {
    if (element.charAt(0) === "#") {
      return document.querySelector(element);
    }

    return document.querySelectorAll(element); 
};

let viewer = elem('#viewer');
viewer.innerHTML = "0";
let nums = elem('.num'); 

function fillViewer(text) {
    if (viewer.innerHTML === "0") {
        viewer.innerHTML = text;
    } else {
        viewer.innerHTML += text;
    }
    result += text;
    console.log(text);
}

function resultToViewer () {
    if (eval(result) === undefined) {
        viewer.innerHTML = "0";
    } else {
        viewer.innerHTML = eval(result);
    }
}

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', function () {fillViewer(nums[i].getAttribute('data-num'))}, false);
}

el = document.querySelector('.equals');
if (el) {
    el.addEventListener('click', function () {resultToViewer()}, false);
    console.log(result);
}


function add() {
    viewer.innerHTML = "+";
    result += "+";
}
function substract() {
    viewer.innerHTML = "-";
    result += "-";
}

function multiply() {
    viewer.innerHTML = "*";
    result += "*";
}

function divide() {
    viewer.innerHTML = "/";
    result += "/";
}

function erase() {
    viewer.innerHTML = "0";
    result = "";
}


el = document.querySelector('.add');
if(el){
  el.addEventListener('click', add);
  console.log(result);
}

el = document.querySelector('.substract');
if (el) {
    el.addEventListener('click', substract);
    console.log(result);
}

el = document.querySelector('.multiply');
if (el) {
    el.addEventListener('click', multiply);
    console.log(result);
}
el = document.querySelector('.divide');
if (el) {
    el.addEventListener('click', divide);
    console.log(result);
}
el = document.querySelector('#clear');
if (el) {
    el.addEventListener('click', erase);
}









