const eqObjects = function(object1, object2) {
  //check for the length first
  if (Object.keys(object1).length !== Object.keys(object2).length)
    return false;
  else {
    //check if all the element an oboject
    for (let key in object1) {
      if (typeof object1[key] === "object" && !Array.isArray(object1[key]) && object1[key] !== null) {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
          //contine checking
        }
      } else {
        if (object1[key] !== object2[key])
          return false;
      }
    }
  }
  return true;
};