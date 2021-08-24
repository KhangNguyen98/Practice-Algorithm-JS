const selectionSort = (arr) => {

 const swap = (instance1, instance2) => {
  let temp = instance1;
  instance1 = instance2;
  instance2 = temp;
 }

 for (let i = 0; i <= arr.length - 1; i++) {
  let isSwapped = false;
  let indexForMinimumElement = i;
  for (let j = i + 1; j < arr.length - 1; j++) {
   if (arr[j] < arr[indexForMinimumElement]) {
    indexForMinimumElement = j;
    isSwapped = true;
   }
  }
  if (isSwapped) {
   swap(arr[indexForMinimumElement], arr[i]);
  }
 }
 return arr;
}

const arr = [8, 5, 3, 1, 12, 16, 10];
console.log(selectionSort(arr));