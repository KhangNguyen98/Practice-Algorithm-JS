class Node {
 constructor(value) {
  this.value = value;
  this.next = null;
 }
}

class SinglyLinkedList {
 constructor() {
  this.head = null;
  this.tail = null;
 }
 push(value) {
  const node = new Node(value);
  if (!this.head && !this.tail) {
   this.head = node;
   this.tail = node;
  } else {
   const newNode = new Node(value);
   this.tail.next = newNode;
   this.tail = newNode;
  }
 }

 unshift(val) {//add node to beginning
  const newNode = new Node(val);
  if (!this.head && !this.tail) {
   this.head = this.tail = newNode;
   return;
  }
  newNode.next = this.head;
  this.head = newNode;
 }

 remove(index) {
  if (!Number.isInteger(index) || index < 0) {
   throw new Error("Invalid input");
  }
  if (!this.head) {
   throw new Error("Cant do cuz it doesnt exist");
  }
  if (index === 0) {
   this.shift();
   return;
  }
  let counter = 0;
  let pointer = this.head;
  while (counter < index - 1) {
   pointer = pointer.next;
   counter++;
  }
  if (!pointer) {
   throw new Error("Over limit of list");
  }
  const removedNode = pointer.next;
  if (removedNode.next) {
   pointer.next = removedNode.next;
  } else {
   pointer.next = null;
  }
 }

 shift() {//remove the node from the begining of the linked list
  if (!this.head) {
   throw new Error("Cant shift cuz it has nothing");
  }
  this.head = this.head.next;
 }

 pop() {//remove the node from the end of the linked list
  if (!this.head) {
   throw new Error("Cant use pop cuz it has nothing");
  }
  if (this.head === this.tail) {//be careful with this case
   this.head = this.tail = null;
   return;
  }
  let pointer = this.head;
  while (pointer.next !== this.tail) {
   pointer = pointer.next;
  }
  pointer.next = null;
  this.tail = pointer;
 }

 get(index) {
  if (!Number.isInteger(index) || index < 0) {
   throw new Error("Invalid input");
  }
  if (!this.head) {
   throw new Error("Cant not found cuz it doesnt exist");
  }
  let counter = 0;
  let result = this.head;
  while (counter < index) {
   result = result.next;
   counter++;
  }
  if (!result) {
   throw new Error("Cant find");
  }
  console.log(result);
 }

 set(index, newVal) {// i will improve set in DoublyLinkedList by exploitting get method
  if (!Number.isInteger(index) || index < 0) {
   throw new Error("Invalid input");
  }
  if (!this.head) {
   throw new Error("Cant do this cuz it doesnt exist");
  }
  let counter = 0;
  let pointer = this.head;
  while (counter !== index) {
   pointer = pointer.next;
   counter++;
  }
  pointer.value = newVal;
 }

 insert(index, val) {
  if (!Number.isInteger(index) || index < 0) {
   throw new Error("Invalid input");
  }
  if (!this.head && index !== 0) {
   throw new Error("Cant do it cuz it doesnt exist");
  }
  if (index === 0) {
   this.unshift(val);
   return;
  }
  const newNode = new Node(val);
  let pointer = this.head;
  let counter = 0;
  while (counter < index - 1) {
   pointer = pointer.next;
   counter++;
  }
  newNode.next = pointer.next;// i put it first cuz i dont want to lose connection.If i dont do this firstly, i must need instance to store pointer.next =.="(I'm a fan of imperative approach)
  pointer.next = newNode;
 }

 reverse() {
  if (!this.head && !this.tail) {
   throw new Error("IT DOESNT EXIST HOW CAN I DO THAT");
  }
  if (this.head === this.tail) {
   console.log("It contains only one node.Why u need to reverse.DUMB ASS");
   return;
  }
  let preNode;
  let nextNode;
  let pointer = this.head;
  this.tail = pointer;
  while (pointer.next) {
   nextNode = pointer.next;
   pointer.next = preNode;
   preNode = pointer;
   pointer = nextNode;
  }
  //yeah i got it man i saved preNode so now use it keke
  pointer.next = preNode;
  this.head = pointer;
 }

 show() {
  if (!this.head && !this.tail) {
   console.log("NOTHING TO SHOW !");
  }
  let pointer = this.head;
  while (pointer) {
   console.log(pointer.value);
   pointer = pointer.next;
  }
 }
}

//test 
const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(9);
singlyLinkedList.push(12);
singlyLinkedList.push(6);
// singlyLinkedList.unshift(235);
// singlyLinkedList.insert(2, 21);
// singlyLinkedList.set(0, 1996);
// singlyLinkedList.remove(3);
singlyLinkedList.reverse();
singlyLinkedList.show();