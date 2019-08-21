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

const without = function(originArr, unwantedArr){
  let originLen = originArr.length;
  let unwantedLen = unwantedArr.length;
  let outputArr = [];
  for (let i = 0; i < originLen; i++){
    let flag = 0;
    for (let j = 0; j < unwantedLen; j ++){
      if (originArr[i] === unwantedArr[j])
        flag = 1;
    }
    if (flag === 0)
      outputArr.push(originArr[i]);
  }
  return outputArr;
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
let wordsModi = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(wordsModi, ["hello", "world", "lighthouse"]);