//takes 2 string and check anagram(uppercase != lowercase)

function anagram(first, second) {
 if (first.length !== second.length) {
  return false;
 }
 const blueprint = {};
 const sample = {};
 for (let index = 0; index < first.length; index++) {
  const character = first[index];
  blueprint[character] = (blueprint[character] || 0) + 1;
 }
 for (let index = 0; index < second.length; index++) {
  const character = second[index];
  sample[character] = (sample[character] || 0) + 1;
 }
 for (const key in blueprint) {
  // if (!(key in sample) || sample[key] != blueprint[key]) {
  //  return false;
  // }

  //another comparision
  if (!(key in sample)) {
   return false;
  } else {
   sample[key] -= 1;//decrease iteration
  }

 }
 return true;
}

console.log(anagram("cat", "rat"));