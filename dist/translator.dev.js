"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToEnglish = exports.convertToMorse = void 0;
var translationObject = {
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
  ' ': '/',
  // This key-value pair allows words to be separated with a slash.
  '': ' ' // This key-value pair joins spaces between morse characters when called in the function convertToEnglish. 
  // convertToEnglish looks for the key rather than the value by calling the function getKeyByValue.

};

var convertToMorse = function convertToMorse(word) {
  var lowerCasedWord = word.trim().toLowerCase(); // Morse code doesn't distinguish between lower and upper case. Trim extra space to avoid errors. 

  var wordCharacters = lowerCasedWord.split(""); // Gives an array of letters in the word 

  var translatedWord = " "; // Initialise translated word
  // Grab each letter from array of letters and use it to find translated version of letter and concatenate to the end of translated word.   

  for (var i = 0; i < wordCharacters.length; i++) {
    translatedWord += "".concat(translationObject[wordCharacters[i]], " "); // NOTE: MUST USE BRACKET NOTATION HERE 
  }

  return translatedWord;
};

exports.convertToMorse = convertToMorse;

var getKeyByValue = function getKeyByValue(object, value) {
  return Object.keys(object).find(function (key) {
    return object[key] === value;
  });
};

var convertToEnglish = function convertToEnglish(word) {
  var morseWordCharacters = word.trim().split(" "); // Extra space is trimmed to avoid errors. .split() gives an array of letters in the word.  

  var translatedWord = ""; // Initialise translated word
  // Grab each letter from array of letters and use it to find translated version of letter and concatenate it to the end of translatedWord.   

  for (var i = 0; i < morseWordCharacters.length; i++) {
    translatedWord += "".concat(getKeyByValue(translationObject, morseWordCharacters[i]));
  }

  return translatedWord;
};

exports.convertToEnglish = convertToEnglish;