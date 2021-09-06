"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
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
  ' ': '/' // This allows words to be separated with a slash.

};

var convertToMorse = function convertToMorse(word) {
  var lowerCasedWord = word.toLowerCase();
  var wordCharacters = lowerCasedWord.split(""); // Gives an array of letters in the word 

  var translatedWord = " "; // Initialise translated word
  // Grab each letter from array of letters and use it to find translated version of letter and concatenate to the end of translated word.   

  for (var i = 0; i < wordCharacters.length; i++) {
    translatedWord += "".concat(translationObject[wordCharacters[i]], " "); // NOTE: MUST USE BRACKET NOTATION HERE 
  }

  return translatedWord;
};

var _default = convertToMorse;
exports["default"] = _default;