/*
  FindersKeepers.js
  Problem: Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
  
  by: roldeguz
  date: 02-March-2017
*/

function findElement(arr, func) {
  var num;  
  num = arr.filter(func);
  
  return num[0];
}

findElement([1, 2, 3, 4], function(num) { return num % 2 === 0; });
