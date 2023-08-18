function isWord(arr, str) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      return true;
    }
  }
  return false;
}
function isString(arr, str) {
  for (let i = 0; i < arr.length; i++) {
    let t = isWord(arr[i], str);
    if (t) {
      return true;
    }
  }
  return false;
}
let arr = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "k"],
  ["l", "m", "n"],
];
let str = "k";
console.log(isString(arr, str));


