"use strict";
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#changes_in_strict_mode

// defines an element called button
//mdn javascript object
//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
let button = document.getElementById('button');
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
button.addEventListener('click', click);

//creates a function called click
function click(e) {
  console.log('button was clicked');
  let number = document.getElementById("number");
  number.innerText = Number(number.innterText) + 1;
}
