// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actualArr, expectedArr) {
  if (eqArrays(actualArr, expectedArr)) {
    console.log(`✅ ✅ ✅ Assertion Passed: [ ${actualArr} ] === [${expectedArr} ]`);
  } else
    console.log(`🔴 🔴 🔴 Assertion Failed: [ ${actualArr} ] !== [ ${expectedArr} ]`);
};
  
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length)
    return false;
  else {
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i])
        return false;
    }
    return true;
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);

const results2 = map(words, word => word.length);

console.log(results2);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 6, 7, 2, 5, 3 ]);
