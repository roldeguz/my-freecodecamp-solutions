/*
  ValidateUSTelephoneNumbers.js
  Problem: Return true if the passed string is a valid US phone number.
  
  Valid formats:
  555-555-5555
  (555)555-5555
  (555) 555-5555
  555 555 5555
  5555555555
  1 555 555 5555
  
  by: roldeguz
  date: 03-March-2017
*/

function telephoneCheck(str) {
  // Good luck!
  return /^(1|1\s)?(\d{3}|\(\d{3}\))(\s|-)?\d{3}(\s|-)?\d{4}$/.test(str);
}

telephoneCheck("555-555-5555");
