//"use strict";
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#changes_in_strict_mode

// defines an element called button
//mdn javascript object
//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
// let button = document.getElementById('button');

//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// button.addEventListener('click', click);
//https://www.youtube.com/watch?v=XF1_MlZ5l6M&t=724s

//creates a function called click with the paramater 'e'. Later an argument will be given to fill in for the parameter
// function click(e) {
//   console.log('button was clicked');
//   let number = document.getElementById("number");
//   number.innerText = Number(number.innterText) + 1;
// }


"use strict";

let buttonA = document.getElementById('button1');
buttonA.addEventListener('click', clicker);

function clicker(e) {
  console.log('button was clicked');
  let numberA = document.getElementById("number1");
  numberA.innerText = Number(numberA.innerText) + 1;
}
