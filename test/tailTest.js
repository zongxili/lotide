// test/headTest.js
const assertEqual = require('../assertEqual');
const tail = require('../tail');

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