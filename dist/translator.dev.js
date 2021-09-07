"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var translationObject = _defineProperty({
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '0': '-----',
  'a': '.-',
  'b': '-...',
  'c': '-.-.',
  'd': '-..',
  'e': '.',
  'f': '..-.',
  'g': '--.',
  'h': '....',
  'i': '..',
  'j': '.---',
  'k': '-.-',
  'l': '.-..',
  'm': '--',
  'n': '-.',
  'o': '---',
  'p': '.--.',
  'q': '--.-',
  'r': '.-.',
  's': '...',
  't': '-',
  'u': '..-',
  'v': '...-',
  'w': '.--',
  'x': '-..-',
  'y': '-.--',
  'z': '--..',
  ' ': '/'
}, " ", '');

var convertToMorse = function convertToMorse(word) {
  var lowerCasedWord = word.toLowerCase(); // Morse code doesn't distinguish between lower and upper case. 

  var wordCharacters = lowerCasedWord.split(""); // Gives an array of letters in the word 

  var translatedWord = " "; // Initialise translated word
  // Grab each letter from array of letters and use it to find translated version of letter and concatenate to the end of translated word.   

  for (var i = 0; i < wordCharacters.length; i++) {
    translatedWord += "".concat(translationObject[wordCharacters[i]], " "); // NOTE: MUST USE BRACKET NOTATION HERE 
  }

  return translatedWord;
};

var getKeyByValue = function getKeyByValue(object, value) {
  return Object.keys(object).find(function (key) {
    return object[key] === value;
  });
};

var convertToEnglish = function convertToEnglish(word) {
  var morseWordCharacters = word.split(" "); // Gives an array of letters in the word 

  var translatedWord = " "; // Initialise translated word

  console.log(morseWordCharacters); // Grab each letter from array of letters and use it to find translated version of letter and concatenate to the end of translated word.   

  for (var i = 0; i < morseWordCharacters.length; i++) {
    translatedWord += "".concat(getKeyByValue(translationObject, morseWordCharacters[i]), " ");
  }

  return translatedWord;
};

var _default = convertToMorse;
exports["default"] = _default;