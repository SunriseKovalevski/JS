function Max(a, b) {    
  return a > b;     
}

function YourString(str1) {
  return "\"Вы ввели " + str1 + "\"";
}

function check (a) {
  return (a === null || a === undefined);
}

function add(obj) {
  obj["checked"] = true;
  return obj;
}

function numberLine(num) { 
  console.log(0);
  for (var i = 1; i <= Math.abs(num); i++){
    if (num<0) console.log(i * -1);
    else console.log(i);
  }
}
