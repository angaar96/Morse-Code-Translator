import {convertToMorse} from "./translator.js"

describe('General functionality', () => {
  test('inputting a single letter should return the correct morse counterpart', () => {
    expect(convertToMorse("a")).toBe(' .- ');
  });
  test('inputting SOS should return the correct morse counterpart', () => {
    expect(convertToMorse("sos")).toBe(' ... --- ... ');
  });
  test('There are no distinctions in morse code between upper and lower case as there is no need. Therefore, capital letter inputs should be converted into lowercase and then converted correctly to morse code.', () => {
    expect(convertToMorse("SOS")).toBe(' ... --- ... ');
  });
  test('Should correctly translate a very long english word', () => {
    expect(convertToMorse("Pneumonoultramicroscopicsilicovolcanoconiosis")).toBe(' .--. -. . ..- -- --- -. --- ..- .-.. - .-. .- -- .. -.-. .-. --- ... -.-. --- .--. .. -.-. ... .. .-.. .. -.-. --- ...- --- .-.. -.-. .- -. --- -.-. --- -. .. --- ... .. ... ');
  });
  test('Should correctly translate a sentence', () => {
    expect(convertToMorse("The quick brown fox jumped over the lazy dog")).toBe(' - .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --. ');
  });
});

describe('Integer functionality', () => {
  test('Should correctly translate a single number', () => {
    expect(convertToMorse("0")).toBe(" ----- ");
  });
  test('Should correctly translate a double digit number', () => {
    expect(convertToMorse("10")).toBe(" .---- ----- ");
  });
  test('Should correctly translate a larger number', () => {
    expect(convertToMorse("1000")).toBe(" .---- ----- ----- ----- ");
  });
  test('Should correctly translate a very large number', () => {
    expect(convertToMorse("3552235296598099871679756415939246787657704949220711847996399214968649262712049244340893304446512999")).toBe(" ...-- ..... ..... ..--- ..--- ...-- ..... ..--- ----. -.... ..... ----. ---.. ----- ----. ----. ---.. --... .---- -.... --... ----. --... ..... -.... ....- .---- ..... ----. ...-- ----. ..--- ....- -.... --... ---.. --... -.... ..... --... --... ----- ....- ----. ....- ----. ..--- ..--- ----- --... .---- .---- ---.. ....- --... ----. ----. -.... ...-- ----. ----. ..--- .---- ....- ----. -.... ---.. -.... ....- ----. ..--- -.... ..--- --... .---- ..--- ----- ....- ----. ..--- ....- ....- ...-- ....- ----- ---.. ----. ...-- ...-- ----- ....- ....- ....- -.... ..... .---- ..--- ----. ----. ----. ");
  });
  test('Should correctly translate a word containing both numbers and letters', () => {
    expect(convertToMorse("Unityis1isOneOtherNumbersInclude23456789")).toBe(" ..- -. .. - -.-- .. ... .---- .. ... --- -. . --- - .... . .-. -. ..- -- -... . .-. ... .. -. -.-. .-.. ..- -.. . ..--- ...-- ....- ..... -.... --... ---.. ----. ");
  });
})