// Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

// Here's an example of a complex data structure:

// var ourMusic = [
//   {
//     "artist": "Daft Punk",
//     "title": "Homework",
//     "release_year": 1997,
//     "formats": [ 
//       "CD", 
//       "Cassette", 
//       "LP" ],
//     "gold": true
//   }
// ];
// This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested "formats" array. If you want to add more album records, you can do this by adding records to the top level array.

// Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of "artist" and a value of "Daft Punk".

// JavaScript Object Notation or JSON is a related data interchange format used to store data.

var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [ 
        "CS", 
        "8T", 
        "LP" ],
      "gold": true
    },
    // Add record here
    {
      "artist": "James Bay",
      "title" : "Us",
      "release_year": 2018,
      "formats": [
        "cd",
        "lp",
        "dvd"
      ],
    }
  ];
  
  