//NOTE: if considering as choosing array or LL to implement i think i will choose ll to remove or insert with complexity O(1) same like complexity of stack 

class Node {
 constructor(value) {
  this.value = value;
  this.next = null;
 }
};

class Stack {
 constructor() {
  this.first = null;
  this.last = null;
  this.size = 0;
 }

 push(value) {
  const newNode = new Node(value);
  if (!this.first && !this.last) {
   this.first = this.last = newNode;
   return newNode;
  }
  newNode.next = this.first;
  this.first = newNode;
  this.size++;
  return this.size;
 }

 pop() {
  if (!this.first && !this.last) {
   throw new Error("How to remove thing that doesnt exist.Tell me pls");
  }
  const removedValue = this.head.value;
  if (this.size === 1) {
   this.fist = this.last = null;//actually we dont need set both fist and last just one is ok 
  } else {
   const savedNode = this.head.next;
   this.head.next = null;
   this.head = savedNode;
  }
  this.size--;
  return removedValue;
 }

 show() {
  if (!this.first) {
   throw new Error("Nothing to show!");
  }
  let pointer = this.first;
  while (pointer) {
   console.log(pointer);
   pointer = pointer.next;
  }
 }
}

const stack = new Stack();
stack.push(5);
stack.push(3);
stack.push(2);
stack.show();