/*
  ExactChange.js
  Problem: Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
  cid is a 2D array listing available currency.
  Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
  Otherwise, return change in coin and bills, sorted in highest to lowest order.
  
  by: roldeguz
  date: 15-March-2017
*/

var denomination = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  
  var register = cid.reduce(function(acc, curr) {
    acc.cashOnHand += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {cashOnHand: 0});

  if (register.cashOnHand == change) {
    return "Closed";
  } 
  
  if (register.cashOnHand < change) {
    return "Insufficient Funds";
  } 
       
  var ch = denomination.reduce(function(acc, curr) {
    var value = 0;
    
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      change = Math.round(change * 100) / 100;
    }
    
    if (value > 0) {
        acc.push([curr.name, value]);
    }
    
    return acc; 
  }, []);

  if (ch.length < 1 || change > 0) {
    return "Insufficient Funds";
  }

  // Here is your change, ma'am.
  return ch;  
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
