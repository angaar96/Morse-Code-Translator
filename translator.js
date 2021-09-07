const translationObject = { 
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
  ' ': '/', // This allows words to be separated with a slash.
  ' ': '', // Allows spaces between morse letters to be replaced with nothing. 
};

const convertToMorse = (word) => {
  let lowerCasedWord = word.toLowerCase(); // Morse code doesn't distinguish between lower and upper case. 
  let wordCharacters = lowerCasedWord.split(""); // Gives an array of letters in the word 
  let translatedWord = " " // Initialise translated word
  // Grab each letter from array of letters and use it to find translated version of letter and concatenate to the end of translated word.   
  for (let i=0; i<wordCharacters.length; i++) {
    translatedWord += `${translationObject[wordCharacters[i]]} `; // NOTE: MUST USE BRACKET NOTATION HERE 
  }
  return translatedWord;
}

const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
}

const convertToEnglish = (word) => { 
  let morseWordCharacters = word.split(" "); // Gives an array of letters in the word 
  let translatedWord = " " // Initialise translated word
  console.log(morseWordCharacters);
  // Grab each letter from array of letters and use it to find translated version of letter and concatenate to the end of translated word.   
  for (let i=0; i<morseWordCharacters.length; i++) {
    translatedWord += `${getKeyByValue(translationObject, morseWordCharacters[i])} `;
  }
  return translatedWord;
}

export default convertToMorse;

