class HashTable {
 constructor(size = 53) {//if we dont pass size then it will get default size which is prime number to avoid collistion frequently
  this.keymap = new Array(size);
 }

 hash(key) {
  let total = 0;
  const WEIRD_PRIME = 31;//DAMN sooner i will research relationship prime and hash function.AMEN :(
  for (let index = 0; index < Math.min(key.length - 1, 100); index++) {//we apply Math.min for configure hash method for faster
   const character = key[index];
   const value = character.charCodeAt(0) - 96; //get the rank in alphabet english
   total = (total * WEIRD_PRIME + value) % this.keymap.length;
  }
  return total;
 }

 set(key, value) {
  const index = this.hash(key);
  //check if index of array contain pair key & value.
  if (!this.keymap[index]) {
   this.keymap[index] = [];//note every element of keymap is array to solve collision
  }
  this.keymap[index].push([key, value]);
 }

 get(key) {
  const index = this.hash(key);
  const containerData = this.keymap[index];
  if (!containerData) {
   return undefined;
  }
  const value = containerData.filter(arr => arr[0] === key);
  return value;
 }
}

//test
const hashTable = new HashTable();
hashTable.set("lagoom", "hem");
hashTable.set("235", "1996");
console.log(hashTable.get("hem"));