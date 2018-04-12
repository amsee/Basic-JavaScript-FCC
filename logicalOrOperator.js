// if (num > 10) {
//   return "No";
// }
// if (num < 5) {
//   return "No";
// }
// return "Yes";

// OR

// if (num > 10 || num < 5) {
//   return "No";
// }
// return "Yes";


function testLogicalOr(val) {
    // Only change code below this line
  
    if (val > 20 || val < 10) {
      return "Outside";
    }
  
  
    // Only change code above this line
    return "Inside";
  }
  
  // Change this value to test
  testLogicalOr(15);
  