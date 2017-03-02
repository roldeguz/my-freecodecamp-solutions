/*
  EverythingBeTrue.js
  Problem: Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
  
  by: roldeguz
  date: 02-March-2017
*/

function truthCheck(collection, pre) {
  // Is everyone being true?
  var check = true;
  
  for (var i = 0; i < collection.length; i++) {
    if (!collection[i].hasOwnProperty(pre)) {
      check = false;
      break;
    } else {      
      if (!Boolean(collection[i][pre])) {
        check = false;
        break;
      }
    }
  }
  
  return check;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
