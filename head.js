const head = function(array) {
  if (array === undefined || array.length === 0) {
    return "undefined";
  } else
    return array[0];
};

module.exports = head;