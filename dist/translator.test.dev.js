"use strict";

var _translator = _interopRequireDefault(require("./translator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Integer functionality', function () {
  test('inputting a single letter should return the correct morse counterpart', function () {
    expect((0, _translator["default"])("a")).toBe(' .- ');
  });
  test('inputting SOS should return the correct morse counterpart', function () {
    expect((0, _translator["default"])("sos")).toBe(' ... --- ... ');
  });
  test('There are no distinctions in morse code between upper and lower case as there is no need. Therefore, capital letter inputs should be converted into lowercase and then converted correctly to morse code.', function () {
    expect((0, _translator["default"])("SOS")).toBe(' ... --- ... ');
  });
  test('Should correctly translate a very long english word', function () {
    expect((0, _translator["default"])("Pneumonoultramicroscopicsilicovolcanoconiosis")).toBe(' .--. -. . ..- -- --- -. --- ..- .-.. - .-. .- -- .. -.-. .-. --- ... -.-. --- .--. .. -.-. ... .. .-.. .. -.-. --- ...- --- .-.. -.-. .- -. --- -.-. --- -. .. --- ... .. ... ');
  });
  test('Should correctly translate a sentence', function () {
    expect((0, _translator["default"])("The quick brown fox jumped over the lazy dog")).toBe(' - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. ');
  });
});
describe('Integer functionality', function () {
  test('Should correctly translate a single number', function () {
    expect((0, _translator["default"])("0")).toBe(" ----- ");
  });
  test('Should correctly translate a single number', function () {
    expect((0, _translator["default"])("10")).toBe(" .---- ----- ");
  });
  test('Should correctly translate a larger number', function () {
    expect((0, _translator["default"])("1000")).toBe(" .---- ----- ----- ----- ");
  });
  test('Should correctly translate a very large number', function () {
    expect((0, _translator["default"])("3552235296598099871679756415939246787657704949220711847996399214968649262712049244340893304446512999")).toBe(" ...-- ..... ..... ..--- ..--- ...-- ..... ..--- ----. -.... ..... ----. ---.. ----- ----. ----. ---.. --... .---- -.... --... ----. --... ..... -.... ....- .---- ..... ----. ...-- ----. ..--- ....- -.... --... ---.. --... -.... ..... --... --... ----- ....- ----. ....- ----. ..--- ..--- ----- --... .---- .---- ---.. ....- --... ----. ----. -.... ...-- ----. ----. ..--- .---- ....- ----. -.... ---.. -.... ....- ----. ..--- -.... ..--- --... .---- ..--- ----- ....- ----. ..--- ....- ....- ...-- ....- ----- ---.. ----. ...-- ...-- ----- ....- ....- ....- -.... ..... .---- ..--- ----. ----. ----. ");
  });
  test('Should correctly translate a word containing both numbers and letters', function () {
    expect((0, _translator["default"])("Unityis1isOneOtherNumbersInclude23456789")).toBe(" ..- -. .. - -.-- .. ... .---- .. ... --- -. . --- - .... . .-. -. ..- -- -... . .-. ... .. -. -.-. .-.. ..- -.. . ..--- ...-- ....- ..... -.... --... ---.. ----. ");
  });
});