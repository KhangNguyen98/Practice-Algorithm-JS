const getIndexOfNumInArr = (arr, num) => {
 if (!Array.isArray(arr) || !Number.isInteger(num)) {
  throw new Error("Invalid input");
 }
 for (let index = 0; index < arr.length; index++) {
  if (arr[index] === num) {
   return index;
  }
 }
 return -1;
}

console.log(getIndexOfNumInArr([2, 8, 1, 5, 12, 19, 6, 17], 6));