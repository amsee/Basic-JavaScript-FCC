
function multiplyAll(arr) {
  var product = 1;

  // 1st dimension of array
  for (var i=0; i < arr.length; i++) { // 3 arrays
  
    // 2nd dimension - arrays inside the big array
    console.log("i: ", i);
    
    for (var j=0; j < arr[i].length; j++)
      console.log("i: " + i + "       j: " + j);
      product*=arr[i][j];
  }

  return product;
}

// Modify values below to test your code
var arr = [
  [1,2],
  [3,4],
  [5,6,7]
];
multiplyAll(arr);
