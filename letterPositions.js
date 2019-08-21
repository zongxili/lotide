//code from previous assignment, for testing purpose
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

//own code for this program
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  const inputArr = sentence.split(" ");
  for (const oneWord of inputArr) {
    for (let i = 0; i < oneWord.length; i++) {
      if (results[oneWord.charAt(i)])
        //a little bit difference here
        //it is pushing the index to the array
        //but not doing increment
        results[oneWord.charAt(i)].push(i);
      else
        //insert an index to array
        //by initialing the array with 1 element
        results[oneWord.charAt(i)] = [i];
    }
  }
  return results;
};

//testing
letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").e, [1]);