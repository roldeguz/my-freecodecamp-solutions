/*
  RecordCollection.js
  Problem: You are given a JSON object representing a part of your musical album collection. 
  Each album has several properties and a unique id number as its key. Not all albums have complete information.
  
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

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  var collection = collectionCopy;
  
  if (value === "") {
    delete collection[id][prop];
  } else {
    if (prop === "tracks") {      
        if (!collection[id].hasOwnProperty(prop)) {
          collection[id][prop] = [];
        }
        collection[id][prop].push(value);      
    } else {      
      collection[id][prop] = value;      
    }  
  }
  
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
