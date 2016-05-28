'use strict';

function double_to_one(collection) {
  //在这里写入代码
  var i,j,arr=[],k=0;
  for (i = 0; i < collection.length; i++) {
    if (typeof (collection[i]) =="number") {
      arr[k] = collection[i];
      k++;
    }
    else if(typeof(collection[i])==="object"){
      for(j=0;j<collection[i].length;j++){
        arr[k]=collection[i][j];
        k++
      }
    }
  }
  return arr;
}

module.exports = double_to_one;
