//FUNCTION IMPLEMENTION FROM ANOTHER FUNCTION
const assertEqual = require('./assertEqual');

const tail = function(array) {
  if (array === undefined) {
    return "undefined";
  } else if (array.length === 0 || array.length === 1) {
    return [];
  } else
    return array.slice(1, array.length);
};
module.exports = tail;