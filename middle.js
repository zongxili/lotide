const middle = function(array) {
  let len = array.length;
  let returnArr = [];
  if (len === 0 || len === 1 || len === 2) {
    return returnArr;
  } else if (len % 2 === 1)
    returnArr.push(array[(len / 2) - 1 / 2]);
  else
    returnArr.push(array[(len / 2 - 1)], array[len / 2 ]);
  return returnArr;
};

module.exports = middle;