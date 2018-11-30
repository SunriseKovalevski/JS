let res = document.getElementsByClassName('viewer');
let result = " ";

var elem = function(element) {
    if (element.charAt(0) === "#") { // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }

    return document.querySelectorAll(element); // Otherwise, returns a nodelist
};

let viewer = elem('#viewer');
viewer.innerHTML = "0";
let nums = elem('.num'); 

function fillViewer(text) {
    viewer.innerHTML = text;
    result += text;
    console.log(text);
}

function resultToViewer () {
    viewer.innerHTML = eval(result);
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
    viewer.innerHTML += "+";
    result += "+";
}
function substract() {
    viewer.innerHTML += "-";
    result += "-";
}

function multiply() {
    viewer.innerHTML += "*";
    result += "*";
}

function divide() {
    viewer.innerHTML += "/";
    result += "/";
}

function pow() {
    viewer.innerHTML += "**";
    result += "**";
}

function num(number = "") {
    result += number;
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










