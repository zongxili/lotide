//codes for this file
const takeUntil = function(array, callback) {
  // ...
  let outputResult = [];
  let looping = true;
  array.forEach(function(element) {
    if (callback(element)) {
      looping = false;
    } else {
      if (looping) {
        outputResult.push(element);
      }
    }
  });
  return outputResult;
};
module.exports = takeUntil;