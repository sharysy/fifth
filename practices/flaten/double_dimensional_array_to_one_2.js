'use strict';
function double_to_one(collection) {
  //在这里写入代码
  var arr=[],result=[];
  arr=originArr(collection);
  result=resultArr(arr);
  return result;
}
function originArr(collection) {
  var i, j, k = 0, arr = [];
  for (i = 0; i < collection.length; i++) {
    if (typeof (collection[i]) === "number") {
      arr[k] = collection[i];
      k++;
    }
    else if (typeof (collection[i]) === "object") {
      for (j = 0; j < collection[i].length; j++) {
        arr[k] = collection[i][j];
        k++;
      }
    }
  }
  return arr;
}
function resultArr(arr) {
  var i,res=[];
  for(i=0;i<arr.length;i++){
    if(res.indexOf(arr[i])==-1)
      res.push(arr[i]);
  }
  return res;
}
module.exports = double_to_one;
