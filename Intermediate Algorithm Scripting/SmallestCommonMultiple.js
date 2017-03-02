/*
  SmallestCommonMultiple.js
  Problem: Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
  The range will be an array of two numbers that will not necessarily be in numerical order.
  e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
  
  by: roldeguz
  date: 02-March-2017
*/

/* Solution is based from http://www.freecodecamp.com/rafase282 */
function smallestCommons(arr) {
  var range = [];
  var min = arr[0], max = arr[1];
  
  if (arr[0] > arr[1]) {
    min = arr[1];
    max = arr[0];
  }
  
  for (var i = max; i >= min; i--) {
    range.push(i);
  }
  
  var quot = 0;
  var loop = 1;
  var j;
  
  do {
    quot = range[0] * loop * range[1];
    for (j = 2; j < range.length; j++) {
      if (quot % range[j] !== 0) {
        break;
      }
    }

    loop++;
  } while (j !== range.length)

  return quot;  
}


smallestCommons([1,5]);
