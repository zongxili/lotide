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

const flatten = function(inputArr) {
  let outputArr = [];
  for (let i = 0; i < inputArr.length; i ++) {
    if (Array.isArray(inputArr[i]) === false)
      outputArr.push(inputArr[i]);
    else {
      for (let j = 0; j < inputArr[i].length; j ++)
        outputArr.push(inputArr[i][j]);
    }
  }
  return outputArr;
};
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
