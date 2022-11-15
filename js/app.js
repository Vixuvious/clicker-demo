"use strict";
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#changes_in_strict_mode

// defines an element called button
//mdn javascript object
//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
let buttonA = document.getElementById('button1');
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
buttonA.addEventListener('click', clicked);
//https://www.youtube.com/watch?v=XF1_MlZ5l6M&t=724s

//creates a function called click with the paramater 'e'. Later an argument will be given to fill in for the parameter
function clicked(e) {
  console.log('button was clicked');
  let number = document.getElementById("number");
  number.innerText = Number(number.innterText) + 1;
}
