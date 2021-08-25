class MaxBinaryHeap {
 constructor() {
  this.values = [];
 }

 insert(value) {
  this.values.push(value);
  if (this.values.length !== 1) {
   this.bubbleUp();
  }
 }

 bubbleUp() {

  function swap(arr, index1, index2) {
   let temp = arr[index1];
   arr[index1] = arr[index2];
   arr[index2] = temp;
  }

  function getIndexOfParent(index) {
   return Math.floor((index - 1) / 2);
  }

  let addedIndex = this.values.length - 1;//get index of element we just added

  //addIndex === 0 mean it doesnt have parent so dont need bubble up 
  while (addedIndex > 0 && this.values[addedIndex] > this.values[getIndexOfParent(addedIndex)]) {//then compare value of child and parent and swap if child value is larger than
   swap(this.values, addedIndex, getIndexOfParent(addedIndex));//actually we dont need to call swap we can swap manually
   addedIndex = getIndexOfParent(addedIndex);
  }
 }

 extractMax() {//remove the max value then sinkDown again
  if (this.values.legth === 0) {
   console.log("Really nigga");
   return;
  }
  if (this.values.length === 1) {
   this.values.shift();
   return;
  }
  this.values[0] = this.values[this.values.length - 1];
  this.values.pop();
  this.sinkDown();
 }

 sinkDown() {//solve it but i think it still be verbose :(
  let indexToFix = 0;
  while (true) {
   //i get some difficulties about existence of leftChild and rightChild. But tehee work hard solves everything 
   if (2 * indexToFix + 1 > this.values.length - 1) {//i think check this is not still enough
    break;
   }
   const currentValue = this.values[indexToFix];
   const leftChild = this.values[2 * indexToFix + 1];
   const rightChild = this.values[2 * indexToFix + 2];
   const comparedNumber = (rightChild && rightChild > leftChild) ? rightChild : leftChild;//choose leftChild or rightChild to compare
   if (currentValue > comparedNumber) {//write this will be cleaner
    break;
   }
   const indexToSwap = comparedNumber === leftChild ? 2 * indexToFix + 1 : 2 * indexToFix + 2;
   //swap
   this.values[indexToFix] = comparedNumber;
   this.values[indexToSwap] = currentValue;
   indexToFix = indexToSwap;
  }
 }

 show() {
  console.log(this.values);
 }
}

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(80);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(30);
maxBinaryHeap.insert(14);
maxBinaryHeap.extractMax();
maxBinaryHeap.show();