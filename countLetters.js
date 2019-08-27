const countLetters = function(inputStr) {
  let outputResult = {};
  inputStr = inputStr.toLowerCase();
  let inputArr = inputStr.split(" ");
  for (const oneWord of inputArr) {
    for (let i = 0; i < oneWord.length; i++) {
      if (outputResult[oneWord.charAt(i)])
        outputResult[oneWord.charAt(i)] += 1;
      else
        outputResult[oneWord.charAt(i)] = 1;
    }
  }
  return outputResult;
};
module.exports = countLetters;