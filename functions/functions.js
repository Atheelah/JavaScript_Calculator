let numbers = document.querySelectorAll(".numbers");
let input = document.getElementById("input");
let firstnum = "";

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", addToScreen);
}

function addToScreen(e) {
  firstnum += e.target.innerHTML;
  input.innerHTML += e.target.innerHTML;
}

let BTN = document.querySelector("#button-8");
BTN.addEventListener("click", multi);
function multi() {
  input.innerHTML = input.innerHTML + " x ";
}

//function to clear the input
function clean() {
  input.innerHTML = "";
}
let clear = document.querySelector("#button-1");
clear.addEventListener("click", clean);
