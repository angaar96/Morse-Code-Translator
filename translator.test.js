import {convertToMorse} from "./translator.js"
import {convertToEnglish} from "./translator.js"

// English to Morse tests

describe('English to Morse - General functionality', () => {
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

describe('English to Morse - Integer functionality', () => {
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
  test('Should correctly translate a word containing both numbers and a mixture of capital and lowercase letters', () => {
    expect(convertToMorse("Unityis1isOneOtherNumbersInclude23456789")).toBe(" ..- -. .. - -.-- .. ... .---- .. ... --- -. . --- - .... . .-. -. ..- -- -... . .-. ... .. -. -.-. .-.. ..- -.. . ..--- ...-- ....- ..... -.... --... ---.. ----. ");
  });
})

// Morse to English tests 

describe('Morse to English - General functionality', () => {
  test('inputting a single letter should return the correct english counterpart', () => {
    expect(convertToEnglish("...")).toBe('s');
  });
  test('inputting SOS should return the correct english counterpart', () => {
    expect(convertToEnglish("... --- ...")).toBe('sos');
  });
  test('Should correctly translate a very long morse word back to english', () => {
    expect(convertToEnglish(".--. -. . ..- -- --- -. --- ..- .-.. - .-. .- -- .. -.-. .-. --- ... -.-. --- .--. .. -.-. ... .. .-.. .. -.-. --- ...- --- .-.. -.-. .- -. --- -.-. --- -. .. --- ... .. ...")).toBe('pneumonoultramicroscopicsilicovolcanoconiosis');
  });
  test('Should correctly translate a sentence', () => {
    expect(convertToEnglish("- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.")).toBe('the quick brown fox jumped over the lazy dog');
  });
});

describe('Morse to English - Integer functionality', () => {
  test('Should correctly translate a single number', () => {
    expect(convertToEnglish("-----")).toBe("0");
  });
  test('Should correctly translate a double digit number', () => {
    expect(convertToEnglish(".---- -----")).toBe("10");
  });
  test('Should correctly translate a larger number', () => {
    expect(convertToEnglish(".---- ----- ----- -----")).toBe("1000");
  });
  test('Should correctly translate a very large number', () => {
    expect(convertToEnglish("...-- ..... ..... ..--- ..--- ...-- ..... ..--- ----. -.... ..... ----. ---.. ----- ----. ----. ---.. --... .---- -.... --... ----. --... ..... -.... ....- .---- ..... ----. ...-- ----. ..--- ....- -.... --... ---.. --... -.... ..... --... --... ----- ....- ----. ....- ----. ..--- ..--- ----- --... .---- .---- ---.. ....- --... ----. ----. -.... ...-- ----. ----. ..--- .---- ....- ----. -.... ---.. -.... ....- ----. ..--- -.... ..--- --... .---- ..--- ----- ....- ----. ..--- ....- ....- ...-- ....- ----- ---.. ----. ...-- ...-- ----- ....- ....- ....- -.... ..... .---- ..--- ----. ----. ----.")).toBe("3552235296598099871679756415939246787657704949220711847996399214968649262712049244340893304446512999");
  });
  test('Should correctly translate a word containing both numbers and letters', () => {
    expect(convertToEnglish("..- -. .. - -.-- .. ... .---- .. ... --- -. . --- - .... . .-. -. ..- -- -... . .-. ... .. -. -.-. .-.. ..- -.. . ..--- ...-- ....- ..... -.... --... ---.. ----.")).toBe("unityis1isoneothernumbersinclude23456789");
  });
})