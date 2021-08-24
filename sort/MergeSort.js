const newArr = [];
const mergeArrayByRecursion = (arr1, arr2, index1, index2) => {
 if (index1 > arr1.length - 1 && index2 > arr2.length - 1) {
  return newArr;
 }
 if (index1 > arr1.length) {
  for (let index = index2; index <= arr2.length - 1; index++) {
   newArr.push(arr2[index]);
  }
  return newArr;
 }
 if (index2 > arr2.length) {
  for (let index = index1; index <= arr1.length - 1; index++) {
   newArr.push(arr1[index]);
  }
  return newArr;
 }
 if (arr1[index1] <= arr2[index2]) {
  newArr.push(arr1[index1]);
  return mergeArrayByRecursion(arr1, arr2, ++index1, index2);//be careful with ++
 } else {
  newArr.push(arr2[index2]);
  return mergeArrayByRecursion(arr1, arr2, index1, ++index2);
 }
}

const mergeArray = (arr1, arr2) => {
 const result = [];
 let indexOfArr1 = 0;
 let indexOfArr2 = 0;
 while (indexOfArr1 <= arr1.length - 1 && indexOfArr2 <= arr2.length - 1) {//
  if (arr1[indexOfArr1] < arr2[indexOfArr2]) {
   result.push(arr1[indexOfArr1]);
   indexOfArr1++;
  } else {
   result.push(arr2[indexOfArr2]);
   indexOfArr2++;
  }
 };
 //the loop will break if the result contain full element of arr1 or arr2
 while (indexOfArr1 <= arr1.length - 1) {
  result.push(arr1[indexOfArr1]);
  indexOfArr1++;
 }
 while (indexOfArr2 <= arr2.length - 1) {
  result.push(arr2[indexOfArr2]);
  indexOfArr2++;
 }
 return result;
}

const arr1 = [1, 5, 7, 9];
const arr2 = [3, 4, 8, 10];
// console.log(mergeArrayByRecursion(arr1, arr2, 0, 0));
// console.log(mergeArray(arr1, arr2));

const arr = [9, 2, 6, 1, 4, 3, 14, 12];

const mergeSort = (arr) => {
 if (arr.length <= 1) return arr;
 const middle = Math.ceil(arr.length / 2);
 //best using recursion. :))
 const leftSide = mergeSort(arr.slice(0, middle));
 const rightSide = mergeSort(arr.slice(middle));
 return mergeArray(leftSide, rightSide);
}

console.log(mergeSort(arr));