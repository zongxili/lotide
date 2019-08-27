let findKey = function(object, callback) {
  let outputString = "";
  let flag = true;
  let valueArr = Object.values(object);
  valueArr.forEach(function(element) {
    if (callback(element)) {
      if (flag) {
        outputString = Object.keys(object).find(key => object[key] === element);
        flag = false;
      }
    }
  });
  return outputString;
};

module.exports = findKey;