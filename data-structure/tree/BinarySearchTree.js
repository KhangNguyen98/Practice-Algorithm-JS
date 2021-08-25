class Node {
 constructor(value) {
  this.value = value;
  this.left = null;
  this.right = null;
 }
}

class BinarySearchTree {
 constructor() {
  this.root = null;
 }

 insert(value) {
  const newNode = new Node(value);
  if (!this.root) {
   this.root = newNode;
   return;
  }
  let currentNode = this.root;

  //another solution
  while (true) {
   if (value < currentNode.value) {
    if (!currentNode.left) {
     currentNode.left = newNode;
     return this.root;
    }
    currentNode = currentNode.left;
   } else {
    if (!currentNode.right) {
     currentNode.right = newNode;
     return this.root;
    }
    currentNode = currentNode.right;
   }
  }

  // let savedNode;
  // while (currentNode && currentNode.value !== value) {
  //  savedNode = currentNode;//savedNode in case currentNode will be null when executed in next line
  //  currentNode = value < currentNode.value ? currentNode.left : currentNode.right;
  // }
  // if (value < savedNode.value) {
  //  savedNode.left = newNode;
  // } else {
  //  savedNode.right = newNode;
  // }
 }

 find(value) {
  if (!this.root) {
   console.log("NOT FOUND!");
   return;
  }
  let currentNode = this.root;
  while (currentNode) {
   if (value < currentNode.value) {
    if (!currentNode.left) {
     console.log("NOT FOUND!");
     return;
    }
    currentNode = currentNode.left;
   } else if (value > currentNode.value) {
    if (!currentNode.right) {
     console.log("NOT FOUND!");
     return;
    }
    currentNode = currentNode.right;
   } else {
    console.log(currentNode);
   }
  }
 }

 BreadthFirstSearch() {
  if (!this.root) {
   throw new Error("Nothing to search !");
  }
  const result = [];
  const queue = [];
  queue.push(this.root);
  while (queue.length) {//damn when checking condition with 0 it's so00 fantastic.Sometime when i mess up with this i always use short circuttting :3.But this made my day
   const getFirstNodeInQueue = queue.shift();
   if (getFirstNodeInQueue.left) {
    queue.push(getFirstNodeInQueue.left);
   }
   if (getFirstNodeInQueue.right) {
    queue.push(getFirstNodeInQueue.right);
   }
   result.push(getFirstNodeInQueue.value);
  }
  console.log(result);
 }

 DepthFirstSearchPreOrder() {
  if (!this.root) {
   throw new Error("Nothing to search !");
  }
  //Damn I'm in luv with recursion ~~~.In my point, recursion is one of the main keys to conquer algorithm
  function addNodeByRecursionForPreOrder(result, node) {
   if (!node) {
    return;
   }
   result.push(node.value);
   addNodeByRecursionForPreOrder(result, node.left);
   addNodeByRecursionForPreOrder(result, node.right);
  }
  const result = [];
  addNodeByRecursionForPreOrder(result, this.root);
  console.log(result);
 }

 DepthFirstSearchPostOrder() {
  if (!this.root) {
   throw new Error("Nothing to show!");
  }
  //conquer recursion post or pre order is just a word :)))
  function addNodeByRecursionForPostOrder(result, node) {
   if (!node) {
    return;
   }
   addNodeByRecursionForPostOrder(result, node.left);
   addNodeByRecursionForPostOrder(result, node.right);
   result.push(node.value);
  }
  const result = [];
  addNodeByRecursionForPostOrder(result, this.root);
  console.log(result);
 }

 DepthFirstSearchInOrder() {
  if (!this.root) {
   throw new Error("Nothing to show!");
  }
  //conquer recursion post or pre order is just a word :)))
  function addNodeByRecursionForInOrder(result, node) {
   if (!node) {
    return;
   }
   addNodeByRecursionForInOrder(result, node.left);
   addNodeByRecursionForInOrder(result, node.right);
   result.push(node.value);
  }
  const result = [];
  addNodeByRecursionForInOrder(result, this.root);
  console.log(result);
 }


}

//test
const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(10);
binarySearchTree.insert(6);
binarySearchTree.insert(15);
binarySearchTree.insert(3);
binarySearchTree.insert(8);
binarySearchTree.insert(20);

// binarySearchTree.insert(20);
// binarySearchTree.insert(15);
// binarySearchTree.insert(8);
// binarySearchTree.insert(6);
// binarySearchTree.insert(18);
// binarySearchTree.insert(5);
// binarySearchTree.insert(29);
// binarySearchTree.insert(24);
// binarySearchTree.insert(27);
// binarySearchTree.insert(22);
// binarySearchTree.insert(32);
// binarySearchTree.insert(31);
// binarySearchTree.find(200);
// binarySearchTree.BreadthFirstSearch();
// binarySearchTree.DepthFirstSearchPreOrder();
binarySearchTree.DepthFirstSearchPostOrder();