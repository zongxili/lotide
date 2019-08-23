// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: [ ${actual} ] === [${expected} ]`);
  } else
    console.log(`🔴 🔴 🔴 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`);
};


//check if the elemetn is an array
  //all two are arrays
    //pass all 2 to the function
  //none of them are
  //one is and another one isnt 
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length)
    return false;
  else {
    for (let i = 0; i < array1.length; i ++) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        eqArrays(array1[i], array2[i]);
      }
      else if(!(Array.isArray(array1[i]) && Array.isArray(array2[i]))){
        if (array1[i] !== array2[i])
          return false;
      }
      return false;
    }
    return true;
  }
};

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => false

// eqArrays([[2, 3], [4]], [[2, 3], [4, 5]) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]) , false); // => false

assertEqual(eqArrays([[2, 3], [4]], [[2, 5], 4]) , false); // => false

assertEqual(eqArrays([[2, 3], 4], [[2, 4], 4]) , false); // => false

assertEqual(eqArrays([[2, 3], 4], [[2, 4], 4]) , false); // => false

assertEqual(eqArrays([[2, 3], 4], [[2, 4], 4]) , false); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false