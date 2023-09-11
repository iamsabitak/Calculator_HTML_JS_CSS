let number1;
let number2;
let operation;
let result = 0;
let num1arr = [];
let num2arr = [];
let x = 0;
// let a = document.getElementById("result")
function display(n) {
  console.log(n);
  if (x === 0 || x === 1) {
    num1arr.push(n);
    // x = 1;
    number1 = Number(num1arr.join(""));
    document.getElementById("result").value = number1;
  } else if (x == 2) {
    num2arr.push(n);
    number2 = Number(num2arr.join(""));
    document.getElementById("result").value = number2;
  }
}
function operator(op) {
  // console.log(op)
  x = 2;
  operation = op;
}
function onClear() {
  // console.log("Clear console here");
  document.getElementById("result").value = 0;
  // number1 = null;
  // number2 = null;
  // operation = null;
  num1arr = [];
  num2arr = [];
  result = 0;
  x = 0;
}

function calculate() {
  // console.log("Calculate here");
  if (operation === "+") {
    result = number1 + number2;
    document.getElementById("result").value = result;
  } else if (operation === "-") {
    result = number1 - number2;
    document.getElementById("result").value = result;
  } else if (operation === "*") {
    result = number1 * number2;
    document.getElementById("result").value = result;
  } else if (operation === "/") {
    result = number1 / number2;
    document.getElementById("result").value = result;
  }
}
