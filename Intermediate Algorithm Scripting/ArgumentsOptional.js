/*
  ArgumentsOptional.js
  Problem: Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
  For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
  Calling this returned function with a single argument will then return the sum:

  var sumTwoAnd = addTogether(2);
  sumTwoAnd(3) returns 5.

  If either argument isn't a valid number, return undefined.
  
  by: roldeguz
  date: 02-March-2017
*/

function addTogether() {  
  var IsNumber = function(num) {
    if (typeof num !== 'number') {
      return undefined;
    } else
      return num;
  };
  
  if (arguments.length > 1) {
    if (IsNumber(arguments[0]) === undefined || IsNumber(arguments[1]) === undefined) {
      return undefined;
    } else {
      return arguments[0] + arguments[1];
    }
  } else {
    var a1 = arguments[0];
    if (IsNumber(a1)) {
      return function(a2) {        
        if (a1 === undefined || IsNumber(a2) === undefined) {
          return undefined;
        } else {          
          return a1 + a2;
        }
      };
    }
  }
}

addTogether(108,129); //237
