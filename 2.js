//2.
function MinElem(arr) {
  return Math.min(...arr);
}

function MinArr(arr) {
  let NewArr = [];
  for (let i = 0; i < arr.length; i++) {
    NewArr.push(MinElem(arr[i]));
  }
  return NewArr;
}
let arr = [
  [1, 2, 3],
  [4, 5, 9],
  [6, 7, 8],
];
console.log(MinArr(arr));