//find how many unique values in sorted array

const countUniqueNumber = (arr) => {
 if (!Array.isArray(arr)) {
  throw new Error("Invalid input!");
 }
 if (arr.length === 0) {
  return 0;
 }
 let startPoint = 0;
 let endPoint = startPoint + 1;
 while (endPoint <= arr.length - 1) {
  if (arr[startPoint] !== arr[endPoint]) {
   startPoint++;
   arr[startPoint] = arr[endPoint];
  }
  endPoint++;
 }
 return startPoint + 1;//cuz startPoint is 0 and value starts with 1
};

//1 2 -> 

console.log(countUniqueNumber([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]));

