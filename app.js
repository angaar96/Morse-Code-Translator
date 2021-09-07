// index.html - html file
// app.js - DOM interactions
// translator.js - contains all your functions
// translator.test.js - your test file

import {convertToMorse, convertToEnglish} from "./translator.js"

let translateEnglishWordButton = document.querySelector(".englishToMorseTranslator__translateWordButton");
let translatedEnglishWordMessage = document.querySelector(".englishToMorseTranslator__translatedWord"); 
let translateMorseWordButton = document.querySelector(".morseToEnglishTranslator__translateWordButton");
let translatedMorseWordMessage = document.querySelector(".morseToEnglishTranslator__translatedWord");  


translateEnglishWordButton.addEventListener("click", () => {
  let englishWord = document.querySelector(".englishToMorseTranslator__input").value;
  let translatedEnglishWord = convertToMorse(englishWord); 
  translatedEnglishWordMessage.innerHTML = `Your word in Morse code is: ${translatedEnglishWord}`; 
})

translateMorseWordButton.addEventListener("click", () => {
  let morseWord = document.querySelector(".morseToEnglishTranslator__input").value;
  let translatedMorseWord = convertToEnglish(morseWord); 
  translatedMorseWordMessage.innerHTML = `Your word in Morse code is: ${translatedMorseWord}`; 
})
