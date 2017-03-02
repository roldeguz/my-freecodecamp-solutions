/*
  SumAllPrimes.js
  Problem: Sum all the prime numbers up to and including the provided number.
  A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
  The provided number may not be a prime.
  
  by: roldeguz
  date: 02-March-2017
*/

function sumPrimes(num) {
  var sum = 0;
  
  //used existing function to get all prime numbers from 2 to num (argument)
  function getPrimes(num) {
      var sieve = [], i, j, primes = [];
      for (i = 2; i <= num; ++i) {
          if (!sieve[i]) {
              // i has not been marked -- it is prime
              primes.push(i);
              for (j = i << 1; j <= num; j += i) {
                  sieve[j] = true;
              }
          }
      }
      return primes;
  }
  
  function addPrimes(a, b) {
    return a + b;
  }  
  
  sum = getPrimes(num).reduce(addPrimes, 0);  
  
  return sum;
}

sumPrimes(10);
