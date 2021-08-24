// const swap = (num1, num2) => {
//  let temp = num1;
//  num1 = num2;
//  num2 = temp;
// }
const insertionSort = (arr) => {
 for (let i = 1; i <= arr.length; i++) {
  let currentValue = arr[i];
  let savedIndex;
  for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {//this condtition && is so fantastic.Fuk It's explosion 
   //Step1: this is for move element(in sorted array) to next position if that element is larger than currentValue
   arr[j + 1] = arr[j];
   savedIndex = j;
  }
  //we use step1 to have place to put currentValue for approiate postion(this is for step 2)
  //Step2:
  if (savedIndex || savedIndex === 0) {
   arr[savedIndex] = currentValue;
  }
  return arr;
  // if (indexToSwap || indexToSwap === 0) {//cuz 0 it will see as false so BE CAREFUL
  //  // swap(arr[i], arr[indexToSwap]);// i still dont know why swap doesnt work arg i pass is type of number
  // }
 }
};

const arr = [6, 2, 4, 1, 16, 11, 14];
console.log(insertionSort(arr));
