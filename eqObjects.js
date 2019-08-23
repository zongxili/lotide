// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: [ ${actual} ] === [${expected} ]`);
  } else
    console.log(`🔴 🔴 🔴 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`);
};

const eqObjects = function(object1, object2) {
  //check for the length first
  if (Object.keys(object1).length !== Object.keys(object2).length)
    return false;
  else {
    //check if all the element an oboject
    for (let key in object1) {
      if (typeof object1[key] === "object" && !Array.isArray(object1[key]) && object1[key] !== null) {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
          //contine checking
        }
      } else {
        if (object1[key] !== object2[key])
          return false;
      }
    }
  }
  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const ca = { c: "2", a: "1" };
// const ab1 = { a: "2", b: "2" };
// assertEqual(eqObjects(ab, ba), true); // => true
// assertEqual(eqObjects(ab, ca), true); //false since the key name
// assertEqual(eqObjects(ab, ab1), true); //false since the Key value
// const abc = { a: "1", b: "2", c: "3" };

// assertEqual(eqObjects(ab, abc), true);//false since the length
// assertEqual(eqObjects(ab, abc), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);// => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);// => false