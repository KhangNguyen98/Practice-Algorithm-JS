
// const binarySearchDivideAndConquer1 = (left, right, arr, num) => {
//  console.log(left, right);
//  if (right >= left) {//if cant find approriate index then the case will be middle > right or right < left CUZ we use middle+1 and middle -1
//   const middle = Math.ceil(left + (right - left) / 2);// cuz in case if num > arr[middle] the next middle will be between MIDDLE and right(so the middle of (middle and right) must include middle-in this case we use LEFT)
//   if (arr[middle] === num) {
//    return middle;
//   } else if (num > arr[middle]) {
//    return binarySearchDivideAndConquer1(middle + 1, right, arr, num);
//   } else if (num < arr[middle]) {
//    return binarySearchDivideAndConquer1(left, middle - 1, arr, num);
//   }
//  } else {
//   return -1;
//  }
// }

const binarySearchDivideAndConquer = (left, right, arr, num) => {
 if (left <= right) {
  let middle = Math.ceil((right + left) / 2);
  if (arr[middle] === num) {
   return middle;
  } else if (arr[middle] < num) {
   return binarySearchDivideAndConquer(middle + 1, right, arr, num);
  } else if (arr[middle] > num) {
   return binarySearchDivideAndConquer(left, middle - 1, arr, num);
  }
 } else { //in case we cant find any approritate element in array
  return -1;
 }
}

const binarySearch = (arr, num) => {
 let left = 0;
 let right = arr.length - 1;
 let middle = Math.ceil((right + left) / 2);
 while (arr[middle] !== num && left <= right) { //we check in case all elements in arr not equal with num 
  if (arr[middle] < num) {
   left = middle + 1;
  } else if (arr[middle] > num) {
   right = middle - 1;
  }
  middle = Math.ceil((right + left) / 2);
 }
 return arr[middle] === num ? middle : -1;
}

const arr = [2, 7, 8, 9, 11];
console.log(binarySearchDivideAndConquer(0, arr.length - 1, arr, 8));
// console.log(binarySearch(arr, 20));