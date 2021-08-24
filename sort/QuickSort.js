const swap = (arr, index1, index2) => {
 let temp = arr[index1];
 arr[index1] = arr[index2];
 arr[index2] = temp;
}

const merge = (left, middle, right) => {
 let result = [];
 result = [...left];
 result.push(middle);
 result = [...result, ...right];
 return result;
}

const quickSort = (arr, startPoint = 0, endPoint = arr.length - 1) => {
 if (arr.length <= 1) {
  return arr;
 }
 const pivot = arr[startPoint];
 let savedPoint = startPoint;
 for (let index = startPoint + 1; index <= arr.length - 1; index++) {
  if (arr[index] < pivot) {
   savedPoint++;
   swap(arr, index, savedPoint);
  }
 }
 if (savedPoint != startPoint) {
  swap(arr, savedPoint, startPoint);
 }
 const leftSide = quickSort(arr.slice(0, savedPoint));
 const rigthSide = quickSort(arr.slice(savedPoint + 1));
 return merge(leftSide, arr[savedPoint], rigthSide);
}

const getSwappedIndex = (arr, start = 0, end = arr.length - 1) => {
 const pivot = arr[start];
 let swappedIndex = start;
 for (let index = start + 1; index < arr.length; index++) {
  if (arr[index] < pivot) {
   swappedIndex++;
   swap(arr, index, swappedIndex);
  }
 }
 if (swappedIndex !== start) {
  swap(arr, swappedIndex, start);
 }
 return swappedIndex;
}

const quickSortWithCleanCode = (arr, left = 0, right = arr.length - 1) => {
 if (left < right) {//in the end left and right will have same position so that's time we set base case
  let swappedIndex = getSwappedIndex(arr, left, right);//hmm i wonder  if i dont set left and right it will get default value and same like values i set but actually it doesnt work ? WOW
  quickSortWithCleanCode(arr, left, swappedIndex - 1);
  quickSortWithCleanCode(arr, swappedIndex + 1, right);
 }
 return arr;
}

const arr = [7, 4, 12, 3, 1, 19, 15, 13, 5, -2, -9];
// console.log(quickSort(arr));
console.log(quickSortWithCleanCode(arr));