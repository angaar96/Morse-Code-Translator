"use strict";

var _translator = _interopRequireDefault(require("./translator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// index.html - html file
// app.js - DOM interactions
// translator.js - contains all your functions
// translator.test.js - your test file
var translateWordButton = document.querySelector(".translateWordButton");
var translatedWordMessage = document.querySelector(".translatedWord");
translateWordButton.addEventListener("click", function () {
  var englishWord = document.querySelector(".morseCodeInput").value;
  var translatedWord = (0, _translator["default"])(englishWord);
  translatedWordMessage.innerHTML = "Your word in Morse code is: ".concat(translatedWord);
});