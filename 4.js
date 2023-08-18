function invertedMatrix(arr) {
  let NewMatrix = [];
  for (let j = 0; j < arr[0].length; j++) {
    NewMatrix[j] = [];
    for (let i = 0; i < arr.length; i++) {
      NewMatrix[j][i] = arr[i][j];
    }
  }
  return NewMatrix;
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
console.log(invertedMatrix(arr));
//
// [1,4,7,10]
// [2,5,8,11]
// [3,6,9,12]
