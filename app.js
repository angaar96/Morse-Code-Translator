// index.html - html file
// app.js - DOM interactions
// translator.js - contains all your functions
// translator.test.js - your test file

import convertToMorse from "./translator.js"

let translateWordButton = document.querySelector(".translateWordButton");
let translatedWordMessage = document.querySelector(".translatedWord"); 



translateWordButton.addEventListener("click", () => {
  let englishWord = document.querySelector(".morseCodeInput").value;
  let translatedWord = convertToMorse(englishWord); 
  translatedWordMessage.innerHTML = `Your word in Morse code is: ${translatedWord}`; 
})

