class Node {
 constructor(value) {
  this.value = value;
  this.next = null;
 }
}

class Queue {
 constructor() {
  this.first = null;
  this.last = null;
  this.size = 0;
 }

 enqueue(value) {
  if (!Number.isInteger(value)) {
   throw new Error("Invalid input");
  }
  const newNode = new Node(value);
  if (!this.first) {
   this.first = this.last = newNode;
   return ++this.size;
  }
  newNode.next = this.tail;
  this.tail = newNode;
 }

 dequeue() {
  if (!this.head) {
   throw new Error("How to remove thing that doesnt exist man!");
  }
  if (this.head === this.tail) {
   this.head = this.tail = null;
  } else {
   const savedNode = this.head.next;
   this.head.next = null;
   this.head = savedNode;
  }
  return --this.size;
 }
}