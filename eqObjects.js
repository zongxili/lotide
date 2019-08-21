// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: [ ${actual} ] === [${expected} ]`);
  } else
    console.log(`🔴 🔴 🔴 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`);
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

// const eqObjects = function(object1, object2) {
//   //check for the length first
//   if (Object.keys(object1).length === Object.keys(object2).length) {

//     for (let key in object1) {
//       if (object2[key]) {
//         //if the lengths are same, then check for the Keys' names
//         console.log("Testing cases --------------------------");
//         console.log(key);
//         //if the Keys' names are same
//         //check their values with eqArrays function
//         if (eqArrays(object1[key], object2[key]) !== true)
//           return false;
//       }
      
//     }
//     return true;
//   }
//   return false;
// };

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
  

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ca = { c: "2", a: "1" };
const ab1 = { a: "2", b: "2" };
assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, ca), true); //false since the key name
assertEqual(eqObjects(ab, ab1), true); //false since the Key value
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, abc), true);//false since the length
assertEqual(eqObjects(ab, abc), false);