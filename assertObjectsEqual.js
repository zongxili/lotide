//codes from previous assignment
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

const eqObjects = function(object1, object2) {
  //check for the length first
  if (Object.keys(object1).length !== Object.keys(object2).length)
    return false;
  else {
    //if the lengths are same, then check for the Keys' names
    for (let key in object1) {
      if (!object2[key])
        return false;
      else {
        if (!eqArrays(object1[key], object2[key]))
          return false;
      }
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected))
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};


//testing cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ca = { c: "2", a: "1" };
const ab1 = { a: "2", b: "2" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ab); // => true
assertObjectsEqual(ab, ba); // => true
assertObjectsEqual(ab, ca); //false since the key name
assertObjectsEqual(ab, ab1); //false since the Key value
assertObjectsEqual(ab, abc);//false since the length
