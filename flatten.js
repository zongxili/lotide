const flatten = function(inputArr) {
  let outputArr = [];
  for (let i = 0; i < inputArr.length; i ++) {
    if (Array.isArray(inputArr[i]) === false)
      outputArr.push(inputArr[i]);
    else {
      for (let j = 0; j < inputArr[i].length; j ++)
        outputArr.push(inputArr[i][j]);
    }
  }
  return outputArr;
};
module.exports = flatten;