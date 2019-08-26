//check if the elemetn is an array
  //all two are arrays
    //pass all 2 to the function
  //none of them are
  //one is and another one isnt
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length)
    return false;
  else {
    for (let i = 0; i < array1.length; i ++) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        eqArrays(array1[i], array2[i]);
      } else if (!(Array.isArray(array1[i]) && Array.isArray(array2[i]))) {
        if (array1[i] !== array2[i])
          return false;
      }
      return false;
    }
    return true;
  }
};
module.exports = eqArrays;