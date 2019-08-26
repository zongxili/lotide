// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actualArr, expectedArr) {
  if (eqArrays(actualArr, expectedArr)) {
    console.log(`✅ ✅ ✅ Assertion Passed: [ ${actualArr} ] === [${expectedArr} ]`);
  } else
    console.log(`🔴 🔴 🔴 Assertion Failed: [ ${actualArr} ] !== [ ${expectedArr} ]`);
};
const eqArrays = require("./eqArrays");

module.exports = assertArraysEqual;