//1.
function Sum(arr) {
  return arr.reduce((s, i) => (s += i));
}
function GetBigSumArray(arr) {
  let max = Sum(arr[0]);
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    let item = Sum(arr[i]);
    if (item > max) {
      max = item;
      index = i;
    }
  }
  return index;
}
let arr = [
  [1, 2, 3],
  [4, 5, 9,],
  [6, 7, 8],
];
console.log(GetBigSumArray(arr));






