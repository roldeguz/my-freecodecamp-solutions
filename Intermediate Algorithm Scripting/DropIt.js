/*
  DropIt.js
  Problem: Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
  The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
  Return the rest of the array, otherwise return an empty array.
  
  by: roldeguz
  date: 02-March-2017
*/

/* Solution is based from http://www.freecodecamp.com/rafase282 */
function dropElements(arr, func) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();      
    }
  }
  
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
