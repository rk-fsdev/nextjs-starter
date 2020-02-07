import * as CryptoJS from 'crypto-js';

export const encryptInfo = info => {
  const stringInfo = JSON.stringify(info);
  const wordArray = CryptoJS.enc.Utf8.parse(stringInfo);
  return CryptoJS.enc.Base64.stringify(wordArray);
};

export const decryptInfo = cryptString => {
  var parsedWordArray = CryptoJS.enc.Base64.parse(cryptString);
  var parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
  return JSON.parse(parsedStr);
};
