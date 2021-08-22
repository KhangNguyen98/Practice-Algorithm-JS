//function takes 2 args as array.Return true if every value in the array has it corresponding value squared in the second array.

//solution: FrequencyCounter Complexity: O(n)

function frequencyCounter(first, second) {
 if (!Array.isArray(first) || !Array.isArray(second)) {
  throw new Error("Invalid user input!");
 }
 if (first.length !== second.length) {
  return false;
 }
 //here is selling point
 const blueprint = {};
 const sample = {};
 //for of used for reaching value
 for (const value of first) {//O(n)
  blueprint[value] = (blueprint[value] || 0) + 1;//this is for set iteration of element
 }
 for (const value of second) {//O(n)
  sample[value] = (sample[value] || 0) + 1;
 }
 console.log(blueprint, sample);
 //for in used for reaching key of obj
 for (const key in blueprint) {//O(n)
  //damn i'm so suprised that value is sequential even obj cant make order
  if (!(key ** 2 in sample) || sample[key ** 2] != blueprint[key]) {//check exist and iterations
   return false;
  }
  return true;
 }
}
// Complexity: O(n)

const first = [1, 2, 3, 1];
const second = [4, 1, 9, 1];
console.log(frequencyCounter(first, second));