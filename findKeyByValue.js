// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: [ ${actual} ] === [${expected} ]`);
  } else
    console.log(`🔴 🔴 🔴 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`);
};

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
const findKeyByValueByMentor = (inputObject, inputValue) => {
  for (let key in inputObject) {
    const currentValue = inputObject[key];
      if (currentValue === inputValue) {
        return key;
      }
  }
}

//testing cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValueByMentor(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValueByMentor(bestTVShowsByGenre, "That '70s Show"), undefined);