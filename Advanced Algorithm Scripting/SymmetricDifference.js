/*
  SymmetricDifference.js
  Problem: Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
  
  Valid formats:
  555-555-5555
  (555)555-5555
  (555) 555-5555
  555 555 5555
  5555555555
  1 555 555 5555
  
  by: roldeguz
  date: 14-March-2017
*/

function sym() {
  var args = [].slice.call(arguments);
  
  function diff(array1, array2) {
    return array1.filter(function (el) {
      return !~array2.indexOf(el);
    });
  }
  
  return args.reduce(function (aArray, cArray) { 
    return [].concat(diff(aArray, cArray), diff(cArray, aArray)).filter(function (el, idx, self) { 
      return self.indexOf(el) === idx; 
    });
  });      
}

sym([1, 2, 3], [5, 2, 1, 4]);
