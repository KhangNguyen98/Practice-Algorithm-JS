class WeightedGraph {
 constructor() {
  this.adjacencyList = {};
 }

 addVertex(vertex) {
  if (this.adjacencyList[vertex]) {
   throw new Error("Dont do redundant thing");
  }
  this.adjacencyList[vertex] = [];
 }

 addEdge(vertex1, vertex2, weight) {
  if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
   throw new Error("Invalid vertex");
  }
  this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
  this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
 }


 dijkstras(startVertex, endVertex) {
  if (!this.adjacencyList[startVertex] || !this.adjacencyList[endVertex]) {
   throw new Error("Invalid vertex");
  }

  //this is second time i learnt it.
  //set up for path from startVertex to other Vertex is inifinity
  const distances = {};
  const previousVertex = {};
  const priorityQueue = new PriorityQueue();
  priorityQueue.enqueue({ vertex: startVertex, weight: 0 })
  for (const vertex in this.adjacencyList) {
   if (vertex === startVertex) {
    distances[vertex] = 0;
    // priorityQueue.enqueue({ vertex, weight: 0 })
   } else {
    distances[vertex] = Infinity;
    // priorityQueue.enqueue({ vertex, weight: Infinity })
   }
   previousVertex[vertex] = null;
  }

  let currentVertex = priorityQueue.dequeue().vertex;
  let savedDistance;
  while (currentVertex !== endVertex) {
   for (const neighbor of this.adjacencyList[currentVertex]) {
    if (distances[currentVertex] + neighbor.weight < distances[neighbor.vertex]) {
     distances[neighbor.vertex] = distances[currentVertex] + neighbor.weight;
     previousVertex[neighbor.vertex] = currentVertex;
     priorityQueue.enqueue({ vertex: neighbor.vertex, weight: distances[neighbor.vertex] });
    }
   }
   const getFromQueue = priorityQueue.dequeue();//take min from PriorityQueue
   currentVertex = getFromQueue.vertex;
   savedDistance = getFromQueue.weight;
  }

  //getPath from previousVertex
  const path = [];
  let vertexGraph = endVertex;
  while (vertexGraph !== startVertex) {
   path.push(vertexGraph);
   vertexGraph = previousVertex[vertexGraph];
  }
  path.push(startVertex);

  console.log("TOTAL DISTANCE:" + savedDistance);
  console.log("PATH:" + path.reverse());
 }
}

//revision BinaryHeap by PriorityQueue implement MinBinaryHeap
class PriorityQueue {
 constructor() {
  this.values = [];
 }

 enqueue(neighbor) {
  this.values.push(neighbor);
  this.bubbleUp();
 }

 bubbleUp() {

  function getIndexOfParent(indexToBalance) {
   return Math.floor((indexToBalance - 1) / 2);
  }

  if (this.values.length === 1) return;
  let indexToBalance = this.values.length - 1;
  while (indexToBalance > 0 && this.values[indexToBalance].weight < this.values[getIndexOfParent(indexToBalance)].weight) {
   //swap
   const temp = this.values[indexToBalance];
   this.values[indexToBalance] = this.values[getIndexOfParent(indexToBalance)];
   this.values[getIndexOfParent(indexToBalance)] = temp;
   indexToBalance = getIndexOfParent(indexToBalance);
  }
 }

 dequeue() {
  const getFromQueue = this.values[0];
  this.sinkDown();
  return getFromQueue;
 }

 sinkDown() {
  this.values[0] = this.values[this.values.length - 1];
  this.values.pop();
  let indexToBalance = 0;
  let leftIndex = 2 * indexToBalance + 1;
  let comparedNumber;
  let indexOfChild;
  while (indexToBalance < this.values.length && leftIndex < this.values.length) {
   const currentValue = this.values[indexToBalance].weight;
   const leftChild = this.values[leftIndex];
   const rightChild = this.values[2 * indexToBalance + 2];
   comparedNumber = (rightChild && rightChild.weight > leftChild.weight ? rightChild.weight : leftChild.weight);
   indexOfChild = comparedNumber === leftChild.weight ? leftIndex : leftIndex + 1;
   if (currentValue < comparedNumber) {
    break;
   }
   //swap
   const temp = this.values[indexOfChild];
   this.values[indexOfChild] = this.values[indexToBalance];
   this.values[indexToBalance] = temp;
   indexToBalance = indexOfChild;
   leftIndex = 2 * indexToBalance + 1;
  }
 }
}

//test
const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.dijkstras("A", "F");