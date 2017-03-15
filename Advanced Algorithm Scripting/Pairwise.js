/*
  Pairwise.js
  Problem: Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
  If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. 
  Once an element has been used, it cannot be reused to pair with another.
  
  by: roldeguz
  date: 15-March-2017
*/

function pairwise(arr, arg) {
  var sum = 0;
  
  var tArr = arr.slice();
  
  return tArr.reduce(function(acc, val, idx) {
    var s = arg - val;
    
    if (tArr.indexOf(s) != -1 && tArr.indexOf(s) != idx ) {  
      var tot = idx + tArr.indexOf(s); 
      tArr.splice(idx, 1, NaN); 
      tArr.splice(tArr.indexOf(s), 1, NaN);
      
      return acc + tot;
    }
    
    return acc;
  }, 0);
}

pairwise([1,4,2,3,0,5], 7);
