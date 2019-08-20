// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅Assertion Passed: [ ${actual} ] === [${expected} ]`);
  } else
    console.log(`🔴 🔴 🔴Assertion Failed: [ ${actual} ] !== [ ${expected} ]`);
};
  

const tail = function(array) {
  if (array === undefined) {
    return "undefined";
  } else if (array.length === 0 || array.length === 1) {
    return [];
  } else
    return array.slice(1, array.length);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
const emptyArray = [];
console.log(tail(emptyArray));
const oneElementArray = ["something"];
console.log(tail(oneElementArray));

// Test Case: Check the original array
const words1 = ["Yo Yo", "Lighthouse", "Labs"];
tail(words1); // no need to capture the return value since we are not checking it
assertEqual(words1.length, 3); // original array should still have 3 elements!
