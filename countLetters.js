// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅Assertion Passed: [ ${actual} ] === [${expected} ]`);
  } else
    console.log(`🔴 🔴 🔴Assertion Failed: [ ${actual} ] !== [ ${expected} ]`);
};

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


//test cases
//leave the ans here to refer
const ans = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1
};

let result = countLetters("lighthouse in the house");

assertEqual(result["o"], 2);
assertEqual(result["s"], 2);
assertEqual(result["e"], 3);