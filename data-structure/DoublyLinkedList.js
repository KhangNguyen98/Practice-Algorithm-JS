class Node {
 constructor(value) {
  this.value = value;
  this.pre = null;
  this.next = null;
 }
};

class DoublyLinkedList {
 constructor() {
  this.head = null;
  this.tail = null;
  this.length = 0;
 }
 push(value) {
  const node = new Node(value);
  this.length++;//even maybe it not logical but it will make code cleaner.This is a problem why i dont use length in singlyLinkedList even it's helpful in some method
  if (!this.head && !this.tail) {
   this.head = this.tail = node;
   return;
  }
  if (this.head === this.tail) {
   this.head.next = node;
   node.pre = this.head;
   this.tail = node;
   return;
  }
  this.tail.next = node;
  node.pre = this.tail;
  this.tail = node;
  return node;
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

 pop() {
  if (!this.head && !this.tail) {
   throw new Error("Cant remove cuz it doesnt exist !");
  }
  if (this.head === this.tail) {
   this.head = this.tail = null;
   return;
  }
  const removedNode = this.tail;
  const newTailNode = this.tail.pre;
  newTailNode.next = null;
  this.tail = newTailNode;
  this.length--;
  removedNode.pre = null//completely chop connection
  return removedNode;
 }

 shift() {
  if (!this.head) {
   throw new Error("Cant remove cuz it doesnt exist");
  }
  const removedNode = this.head;
  const newHeadNode = this.head.next;
  newHeadNode.pre = null;
  this.head = this.head.next;
  removedNode.next = null;
  this.length--;
  return removedNode;
 }

 unshift(value) {
  const newNode = new Node(value);
  this.length++;
  if (!this.head) {
   this.head = this.tail = newNode;
   return;
  }
  newNode.next = this.head;
  this.head.pre = newNode;
  this.head = newNode;
  return newNode;
 }

 get(index) {
  if (!this.head) {
   throw new Error("Cant get cuz it has nothing");
  }
  if (!Number.isInteger(index) || index < 0 || index > this.length - 1) {
   throw new Error("Invalid input");
  }
  let counter;
  let pointer;
  if (index < Math.floor(this.length / 2)) {
   counter = 0;
   pointer = this.head;
   while (counter < index) {
    pointer = pointer.next;
    counter++;
   }
  } else {
   counter = this.length - 1;
   pointer = this.tail;
   while (counter > index) {
    pointer = pointer.pre;
    counter--;
   }
  }
  return pointer;
 }

 set(index, value) {
  const insertedNode = this.get(index);//cuz we throw error if input is invalid in method get so dont need to check
  insertedNode.value = value;
  return true;
 }

 insert(index, value) {
  if (!Number.isInteger(index) || index < 0 || index > this.length) {
   throw new Error("Invalid input");
  }
  if (index === this.length) {
   return this.push(value);
  }
  if (index === 0) {
   return this.unshift(value);
  }
  const newNode = new Node(value);
  const findNode = this.get(index);
  const beforeNode = findNode.pre;
  beforeNode.next = newNode;
  newNode.pre = beforeNode;
  newNode.next = findNode;
  findNode.pre = newNode;
  findNode.next = null;
  findNode.pre = null;
  this.length++;
  return findNode;
 }

 remove(index) {
  if (!Number.isInteger(index) || index < 0 || index > this.length) {
   throw new Error("Invalid input");
  }
  if (index === 0) {
   return !!this.shift();
  }
  if (index === this.length - 1) {
   return !!this.pop();
  }
  const findNode = this.get(index);
  const preNode = findNode.pre;
  const nextNode = findNode.next;
  preNode.next = nextNode;
  nextNode.pre = preNode;
  this.length--;
  return true;
 }

};



const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(8);
doublyLinkedList.push(3);
doublyLinkedList.push(9);
doublyLinkedList.unshift(235);
doublyLinkedList.insert(1, 1996);
doublyLinkedList.remove(2);
// doublyLinkedList.insert(4, 48);
// doublyLinkedList.pop();
doublyLinkedList.show();

