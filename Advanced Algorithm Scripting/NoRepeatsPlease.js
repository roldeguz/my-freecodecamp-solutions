/*
  NoRepeatsPlease.js
  Problem: Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
  Assume that all characters in the provided string are each unique.

  For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
  but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
  
  by: roldeguz
  date: 15-March-2017
*/

function permAlone(str) {      
  var noRepeats = 0;
  
  if (str.length === 1) {
    noRepeats = 1;
  } else {
    var perm = getPermutations(str);
    
    perm.forEach(function(item) {
      var hasRepeats = (/([a-z])\1/i).test(item);

      if (!hasRepeats)
        noRepeats++;
    }); 
  }  
  
  // Recursive function to get permutations from with minor modification to allow duplicates
  // http://stackoverflow.com/questions/39927452/recursively-print-all-permutations-of-a-string-javascript
  function getPermutations(str) {
    if (str.length < 2) return str;

    var permutations = [];

    for (var i = 0; i < str.length; i++) {
        var char = str[i];                  
        var remainingString = str.slice(0, i) + str.slice(i + 1, str.length); 

        for (var subPermutation of getPermutations(remainingString))
            permutations.push(char + subPermutation)
    }
    
    return permutations;
  }
  
  return noRepeats;
}

permAlone('aab');
