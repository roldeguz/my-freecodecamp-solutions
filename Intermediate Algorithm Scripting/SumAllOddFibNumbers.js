/*
  SumAllOddFibNumbers.js
  Problem: Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
  The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
  For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
  
  by: roldeguz
  date: 02-March-2017
*/

function sumFibs(num) {
  var firstNum = 0;
  var secondNum = 1;
  var sum = 0;
  
  while (secondNum <= num) {
    if (secondNum % 2 !== 0) {
        sum += secondNum;
    }
   
    var nextNum = secondNum + firstNum;
    firstNum = secondNum;
    secondNum = nextNum; 
  }  
  
  return sum;
}

sumFibs(75024);
