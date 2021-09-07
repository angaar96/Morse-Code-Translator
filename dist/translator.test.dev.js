"use strict";

var _translator = require("./translator.js");

describe('English to Morse - General functionality', function () {
  test('inputting a single letter should return the correct morse counterpart', function () {
    expect((0, _translator.convertToMorse)("a")).toBe(' .- ');
  });
  test('inputting SOS should return the correct morse counterpart', function () {
    expect((0, _translator.convertToMorse)("sos")).toBe(' ... --- ... ');
  });
  test('There are no distinctions in morse code between upper and lower case as there is no need. Therefore, capital letter inputs should be converted into lowercase and then converted correctly to morse code.', function () {
    expect((0, _translator.convertToMorse)("SOS")).toBe(' ... --- ... ');
  });
  test('Should correctly translate a very long english word', function () {
    expect((0, _translator.convertToMorse)("Pneumonoultramicroscopicsilicovolcanoconiosis")).toBe(' .--. -. . ..- -- --- -. --- ..- .-.. - .-. .- -- .. -.-. .-. --- ... -.-. --- .--. .. -.-. ... .. .-.. .. -.-. --- ...- --- .-.. -.-. .- -. --- -.-. --- -. .. --- ... .. ... ');
  });
  test('Should correctly translate a sentence', function () {
    expect((0, _translator.convertToMorse)("The quick brown fox jumped over the lazy dog")).toBe(' - .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --. ');
  });
});
describe('English to Morse - Integer functionality', function () {
  test('Should correctly translate a single number', function () {
    expect((0, _translator.convertToMorse)("0")).toBe(" ----- ");
  });
  test('Should correctly translate a double digit number', function () {
    expect((0, _translator.convertToMorse)("10")).toBe(" .---- ----- ");
  });
  test('Should correctly translate a larger number', function () {
    expect((0, _translator.convertToMorse)("1000")).toBe(" .---- ----- ----- ----- ");
  });
  test('Should correctly translate a very large number', function () {
    expect((0, _translator.convertToMorse)("3552235296598099871679756415939246787657704949220711847996399214968649262712049244340893304446512999")).toBe(" ...-- ..... ..... ..--- ..--- ...-- ..... ..--- ----. -.... ..... ----. ---.. ----- ----. ----. ---.. --... .---- -.... --... ----. --... ..... -.... ....- .---- ..... ----. ...-- ----. ..--- ....- -.... --... ---.. --... -.... ..... --... --... ----- ....- ----. ....- ----. ..--- ..--- ----- --... .---- .---- ---.. ....- --... ----. ----. -.... ...-- ----. ----. ..--- .---- ....- ----. -.... ---.. -.... ....- ----. ..--- -.... ..--- --... .---- ..--- ----- ....- ----. ..--- ....- ....- ...-- ....- ----- ---.. ----. ...-- ...-- ----- ....- ....- ....- -.... ..... .---- ..--- ----. ----. ----. ");
  });
  test('Should correctly translate a word containing both numbers and a mixture of capital and lowercase letters', function () {
    expect((0, _translator.convertToMorse)("Unityis1isOneOtherNumbersInclude23456789")).toBe(" ..- -. .. - -.-- .. ... .---- .. ... --- -. . --- - .... . .-. -. ..- -- -... . .-. ... .. -. -.-. .-.. ..- -.. . ..--- ...-- ....- ..... -.... --... ---.. ----. ");
  });
}); // Morse to English tests 

describe('Morse to English - General functionality', function () {
  test('inputting a single letter should return the correct english counterpart', function () {
    expect((0, _translator.convertToEnglish)("...")).toBe('s');
  });
  test('inputting SOS should return the correct english counterpart', function () {
    expect((0, _translator.convertToEnglish)("... --- ...")).toBe('sos');
  });
  test('Should correctly translate a very long morse word back to english', function () {
    expect((0, _translator.convertToEnglish)(".--. -. . ..- -- --- -. --- ..- .-.. - .-. .- -- .. -.-. .-. --- ... -.-. --- .--. .. -.-. ... .. .-.. .. -.-. --- ...- --- .-.. -.-. .- -. --- -.-. --- -. .. --- ... .. ...")).toBe('pneumonoultramicroscopicsilicovolcanoconiosis');
  });
  test('Should correctly translate a sentence', function () {
    expect((0, _translator.convertToEnglish)("- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.")).toBe('the quick brown fox jumped over the lazy dog');
  });
});
describe('Morse to English - Integer functionality', function () {
  test('Should correctly translate a single number', function () {
    expect((0, _translator.convertToEnglish)("-----")).toBe("0");
  });
  test('Should correctly translate a double digit number', function () {
    expect((0, _translator.convertToEnglish)(".---- -----")).toBe("10");
  });
  test('Should correctly translate a larger number', function () {
    expect((0, _translator.convertToEnglish)(".---- ----- ----- -----")).toBe("1000");
  });
  test('Should correctly translate a very large number', function () {
    expect((0, _translator.convertToEnglish)("...-- ..... ..... ..--- ..--- ...-- ..... ..--- ----. -.... ..... ----. ---.. ----- ----. ----. ---.. --... .---- -.... --... ----. --... ..... -.... ....- .---- ..... ----. ...-- ----. ..--- ....- -.... --... ---.. --... -.... ..... --... --... ----- ....- ----. ....- ----. ..--- ..--- ----- --... .---- .---- ---.. ....- --... ----. ----. -.... ...-- ----. ----. ..--- .---- ....- ----. -.... ---.. -.... ....- ----. ..--- -.... ..--- --... .---- ..--- ----- ....- ----. ..--- ....- ....- ...-- ....- ----- ---.. ----. ...-- ...-- ----- ....- ....- ....- -.... ..... .---- ..--- ----. ----. ----.")).toBe("3552235296598099871679756415939246787657704949220711847996399214968649262712049244340893304446512999");
  });
  test('Should correctly translate a word containing both numbers and letters', function () {
    expect((0, _translator.convertToEnglish)("..- -. .. - -.-- .. ... .---- .. ... --- -. . --- - .... . .-. -. ..- -- -... . .-. ... .. -. -.-. .-.. ..- -.. . ..--- ...-- ....- ..... -.... --... ---.. ----.")).toBe("unityis1isoneothernumbersinclude23456789");
  });
});