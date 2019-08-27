const without = function(originArr, unwantedArr){
  let originLen = originArr.length;
  let unwantedLen = unwantedArr.length;
  let outputArr = [];
  for (let i = 0; i < originLen; i++){
    let flag = 0;
    for (let j = 0; j < unwantedLen; j ++){
      if (originArr[i] === unwantedArr[j])
        flag = 1;
    }
    if (flag === 0)
      outputArr.push(originArr[i]);
  }
  return outputArr;
};

module.exports = without;