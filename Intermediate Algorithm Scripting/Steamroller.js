/*
  Problem: Flatten a nested array. You must account for varying levels of nesting.
  
  by: roldeguz
  date: 02-March-2017
*/

/* used recursive call to deal with nested arrays */
function steamrollArray(arr) {
  return arr.reduce(function (flat, toDo) {
    return flat.concat(Array.isArray(toDo) ? steamrollArray(toDo) : toDo);
  }, []);      
}

steamrollArray([1, [2], [3, [[4]]]]);
