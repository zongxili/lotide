//own code for this program
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  const inputArr = sentence.split(" ");
  for (const oneWord of inputArr) {
    for (let i = 0; i < oneWord.length; i++) {
      if (results[oneWord.charAt(i)])
        //a little bit difference here
        //it is pushing the index to the array
        //but not doing increment
        results[oneWord.charAt(i)].push(i);
      else
        //insert an index to array
        //by initialing the array with 1 element
        results[oneWord.charAt(i)] = [i];
    }
  }
  return results;
};
module.exports = letterPositions;