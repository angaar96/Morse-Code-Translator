"use strict";

var _translator = _interopRequireDefault(require("./translator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
  var translatedEnglishWord = (0, _translator["default"])(englishWord);
  translatedEnglishWordMessage.innerHTML = "Your word in Morse code is: ".concat(translatedEnglishWord);
});
translateMorseWordButton.addEventListener("click", function () {
  var morseWord = document.querySelector(".morseToEnglishTranslator__input").value;
  var translatedMorseWord = (0, _translator["default"])(morseWord);
  translatedMorseWordMessage.innerHTML = "Your word in Morse code is: ".concat(translatedMorseWord);
});