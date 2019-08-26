// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === undefined)
    console.log("This is an invalid input.");
  else {
    if (actual === expected) {
      console.log(`✅ ✅ ✅ Assertion Passed: [ ${actual} ] === [${expected} ]`);
    } else
      console.log(`🔴 🔴 🔴 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`);
  }
};



module.exports = assertEqual;
