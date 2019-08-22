// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: [ ${actual} ] === [${expected} ]`);
  } else
    console.log(`🔴 🔴 🔴 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`);
};

let findKey = function(object, callback) {
  let outputString = "";
  let flag = true;
  let valueArr = Object.values(object);
  valueArr.forEach(function(element) {
    if (callback(element)) {
      if (flag) {
        outputString = Object.keys(object).find(key => object[key] === element);
        flag = false;
      }
    }
  });
  return outputString;
};


// function getKeyByValue(object, value) {
//   return Object.keys(object).find(key => object[key] === value);
// }

let result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
assertEqual(result1, "noma");