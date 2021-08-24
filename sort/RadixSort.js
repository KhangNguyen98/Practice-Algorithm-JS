const getDigit = (num, pos) => {
 const strNum = num.toString();
 if (pos < 0) {//we dont compare with strNum length with pos cuz pos depends on maxNum not num
  throw new Error("Invalid input");
 }
 const extractNumber = Math.floor(Math.abs(num) / (10 ** (pos)));//math.abs for num in case it is negative
 return extractNumber % 10;
}

const countDigit = (num) => {
 if (!Number.isInteger(num)) {
  throw new Error("Invalid input");
 }
 return Math.abs(num).toString().length;
}

const getMaxNum = (arr) => {
 let maxNum = -1;//to use Math.max() we must define default value cuz it cant compare undefined or null
 for (let index = 0; index < arr.length; index++) {
  maxNum = Math.max(maxNum, arr[index]);
 }
 return maxNum;
 // const maxNum = arr.reduce((num1, num2) => {
 //  if (num1 >= num2) {
 //   return num1;
 //  }
 //  return num2;
 // })
 // console.log(maxNum);
 // return countDigit(maxNum);
}

const radixSort = (arr) => {
 const maxNum = getMaxNum(arr);
 const totalDigit = countDigit(maxNum);
 let index = 0;//i use index = 0 cuz i want both for iteration with totalDigit also refering position of digit of number . Do u think that i am smart  ^V^
 let result = arr;
 while (index < totalDigit) {
  result = getSorttedArray(result, index);
  index++;
 }
 return result;
}

const getSorttedArray = (arr, index) => {
 const digitsBucket = Array.from({ length: 10 }, () => []);//create an array with length is 10 and each element is an array
 for (let pos = 0; pos < arr.length; pos++) {
  const number = arr[pos];
  const posIndex = getDigit(number, index);
  digitsBucket[posIndex].push(number);
 }
 //better solution
 const result = [].concat(...digitsBucket);
 // let result = [];
 // for (let index = 0; index < digitsBucket.length; index++) {
 //  if (digitsBucket[index].length > 0) {
 //   result = [...result, ...digitsBucket[index]];
 //  }
 // }
 return result;
}

const arr = [1000, 542, 23, 67, 19, 5, 8, 120];
console.log(radixSort(arr));