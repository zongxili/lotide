const findKeyByValue = function(inputObject, inputValue) {
  //here make it undefined, in case there is no matching
  let outputKey = undefined;
  //make Key name as an array to check
  let keyArr = Object.keys(inputObject);
  for (let keyName of keyArr) {
    if (inputValue === inputObject[keyName])
      outputKey = keyName;
  }
  return outputKey;
};

//mentor's answer, much better and shorter
// const findKeyByValueByMentor = (inputObject, inputValue) => {
//   for (let key in inputObject) {
//     const currentValue = inputObject[key];
//       if (currentValue === inputValue) {
//         return key;
//       }
//   }
// }

module.exports = findKeyByValue;