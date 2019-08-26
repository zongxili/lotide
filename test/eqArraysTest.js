const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays.js');

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