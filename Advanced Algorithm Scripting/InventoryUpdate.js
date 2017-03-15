/*
  InventoryUpdate.js
  Problem: Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
  Update the current existing inventory item quantities (in arr1). 
  If an item cannot be found, add the new item and quantity into the inventory array. 
  The returned inventory array should be in alphabetical order by item.
  
  by: roldeguz
  date: 15-March-2017
*/

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  
    // Loop through the new inventory
    arr2.forEach(function(item) {
      if (isInInventory(arr1, item[1])) {
        updateInventory(arr1, item);
      } else {
        arr1.push(item);
      }
    });
    
    // Function to check if item is already in the inventory
    function isInInventory(arr1, item) {
        var items = arr1.map(function(value, index) { return value[1]; });
        
        return (items.indexOf(item) > -1);  
    } 
  
    // Update inventory
    function updateInventory(arr1, item) {
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i][1] === item[1]) {
          arr1[i][0] = arr1[i][0] + item[0];
        }
      }
    }
    
    // Sort
    arr1.sort(function(a, b) { 
      return a[1] > b[1] ? 1 : -1;
    });
  
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
