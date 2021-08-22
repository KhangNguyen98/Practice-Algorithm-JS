const bubbleSort = (arr) => {
 let isSwapped;
 for (let i = arr.length; i > 0; i--) {
  isSwapped = false;
  for (let j = 0; j < i - 1; j++) {
   if (arr[j] > arr[j + 1]) {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
    isSwapped = true;
   }
  }
  if (!isSwapped) {
   break;
  }
 }
 return arr;
}

const arr = [12, 3, 8, 5, 9, 1];
console.log(bubbleSort(arr));