// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    console.log(item);
    //Object.keys added since this program needs to check the Key name one by one
    for (const wantedItem of Object.keys(itemsToCount)) {
    //   if (itemsToCount[item]) { 
    //   this is school's answer for the following IF statement, this is even better
    //   since it puts the item to the target object to check
    //   smart!
      if (item === wantedItem) {
        //if the results has this item as a key which should not be undefined
        if (results[item])
          results[item] += 1;
        else
          results[item] = 1;
      }
    }
  }
  console.log(results);
  return results;
};
module.exports = countOnly;