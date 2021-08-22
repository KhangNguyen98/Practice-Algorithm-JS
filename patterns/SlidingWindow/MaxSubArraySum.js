//taking 2 arg first is array and second is quantity of number for summing max.This function will return a sum depends on number u pass to count

const maxSubArraySum = (arr, num) => {
 if (!Array.isArray(arr) || !Number.isInteger(num) || num <= 0) {
  throw new Error("Invalid input");
 }
 if (arr.length === 0) {
  return null;
 }
 let indexChoosen;
 let max_element = arr[0];
 for (let index = 1; index < arr.length; index++) {
  if (max_element < arr[index]) {
   indexChoosen = index;
   max_element = arr[index];
  }
 }
 while (arr[indexChoosen] && num > 1) {
  num--;
  indexChoosen--;
  max_element += arr[indexChoosen];
 }
 return max_element;
}

console.log(maxSubArraySum([], 4));