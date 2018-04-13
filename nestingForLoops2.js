// i:  0
// i: 0       j: 0
// i: 0       j: 1
// i:  1
// i: 1       j: 0
// i: 1       j: 1
// i:  2
// i: 2       j: 0
// i: 2       j: 1
// i: 2       j: 2
// => NaN


function multiplyAll(arr) {
  //* initialize variable to 1
  var product = 1;

    //! 1st dimension of array
    //? (1) first for loop checks for length of arrays -> line 35-37
  for (var i=0; i < arr.length; i++) { // ? arr.length = 3 arrays
  
    //! 2nd dimension - arrays inside the big array
    console.log("i: ", i);
    //? (2) second (nested) for loop checks for the position of the nested elements in arrays 
    for (var j=0; j < arr[i].length; j++)
      console.log("i: " + i + "       j: " + j);
      //? multiply the product with 
      product*=arr[i][j];
      product = product * arr[i][j];
  }

  return product;
}

// *Modify values below to test your code
//? (1)
//? (2)
var arr = [ //! 1st dimension (outer array)
  [1,2], //! 2nd dimension (inner array)
  [3,4], 
  [5,6,7]
];
multiplyAll(arr);
