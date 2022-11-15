"use strict";

// defines an element called button
let button = document.getElementById('button');
button.addEventListener('click', click);

//creates a function called click
function click(e) {
  console.log('button was clicked');
  let number = document.getElementById("number");
  number.innerText = Number(number.innterText) + 1;
}
