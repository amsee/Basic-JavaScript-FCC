// function foo(x) {
//     if (x < 1) {
//       return "Less than one";
//     } else if (x < 2) {
//       return "Less than two";
//     } else {
//       return "Greater than or equal to two";
//     }
//   }

// OR

//   function bar(x) {
//     if (x < 2) {
//       return "Less than two";
//     } else if (x < 1) {
//       return "Less than one";
//     } else {
//       return "Greater than or equal to two";
//     }
//   }

function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  // Change this value to test
  orderMyLogic(7);
  