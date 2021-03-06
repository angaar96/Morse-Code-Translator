"use strict";

var _translator = require("./translator.js");

// index.html - html file
// app.js - DOM interactions
// translator.js - contains all your functions
// translator.test.js - your test file
var translateEnglishWordButton = document.querySelector(".englishToMorseTranslator__translateWordButton");
var translatedEnglishWordMessage = document.querySelector(".englishToMorseTranslator__translatedWord");
var translateMorseWordButton = document.querySelector(".morseToEnglishTranslator__translateWordButton");
var translatedMorseWordMessage = document.querySelector(".morseToEnglishTranslator__translatedWord");
translateEnglishWordButton.addEventListener("click", function () {
  var englishWord = document.querySelector(".englishToMorseTranslator__input").value;
  var translatedEnglishWord = (0, _translator.convertToMorse)(englishWord);
  translatedEnglishWordMessage.innerHTML = "Your word/sentence in Morse code is: <br> ".concat(translatedEnglishWord);
});
translateMorseWordButton.addEventListener("click", function () {
  var morseWord = document.querySelector(".morseToEnglishTranslator__input").value;
  var translatedMorseWord = (0, _translator.convertToEnglish)(morseWord);
  translatedMorseWordMessage.innerHTML = "Your word/sentence in English is: <br> ".concat(translatedMorseWord);
});