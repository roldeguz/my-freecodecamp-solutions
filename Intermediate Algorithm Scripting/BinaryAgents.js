/*
  BinaryAgent.js
  Problem: Return an English translated sentence of the passed binary string.
  
  by: roldeguz
  date: 02-March-2017
*/

/* used parseInt to get the decimal representation of a binary string */
function binaryAgent(str) {
  var chars = str.split(" ");
  var result = "";
  
  chars.forEach(function(item, index, array) {
    var charCode = parseInt(item, 2);
    
    result += String.fromCharCode(charCode);
  });
  
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
