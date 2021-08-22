//asume we have an sorted array we want to return two opposite number that sum is 0.Else if they doesnt exist then return undefined

function sumZero(arr) {
 if (!Array.isArray(arr)) {
  throw new Error("Invalid input!");
 }
 let left = 0;
 let right = arr.length - 1;
 while (left < right) { //we wont set equal in case array is not symmetric
  const sum = arr[left] + arr[right];
  if (sum === 0) {
   return [arr[left], arr[right]];
  } else if (sum > 0) {
   right--;
  } else {
   left++;
  }
 }
}
//Complexity: O(n)

console.log(sumZero([-4, -2, 0, 1, 6, 10]));