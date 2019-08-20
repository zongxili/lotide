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

const middle = function(array) {
  let len = array.length;
  let returnArr = [];
  if (len === 0 || len === 1 || len === 2) {
    return returnArr;
  } else if (len % 2 === 1)
    returnArr.push(array[(len / 2) - 1 / 2]);
  else
    returnArr.push(array[(len / 2 - 1)], array[len / 2 ]);
  return returnArr;
};
    
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3]);
