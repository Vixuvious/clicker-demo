"use strict";

let button = document.getElementById('button');
button.addEventListener('click', click);

function click(e){
  console.log('button was clicked');
  let number = document.getElementById("number");
  number.innterText = Number(number.innterText) + 1;
}
