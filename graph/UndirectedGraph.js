class Graph {
 constructor() {
  this.adjacencyList = {};
 }

 addVertex(vertex) {
  if (this.adjacencyList[vertex]) {// I latency thank to God cuz i have already this in JS Ahihi.Long time ago. I got this trouble with React.Damn that's a hard period :(
   throw new Error("Hey hey it's already existed man ^^");
  }
  this.adjacencyList[vertex] = [];
 }

 addEdge(vertex1, vertex2) {
  if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
   throw new Error("Invalid vertex");
  }
  this.adjacencyList[vertex1].push(vertex2);
  this.adjacencyList[vertex2].push(vertex1);
 }

 removeEdge(vertex1, vertex2) {
  if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
   throw new Error("Invalid vertex");
  }
  this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
 }

 removeVertex(removedVertex) {
  if (!this.adjacencyList[removedVertex]) {
   throw new Error("Bad request!");
  }

  //another way
  while (this.adjacencyList[removedVertex].length) {
   const vertex = this.adjacencyList[removedVertex].shift();
   this.removeEdge(vertex, removedVertex);
  }

  // for (const key of this.adjacencyList[removedVertex]) {
  //  this.adjacencyList[key] = this.adjacencyList[key].filter(vertext => vertext !== removedVertex);
  // }

  //damn luv u,js
  delete this.adjacencyList[removedVertex];
 }

 depthFirstSearchRecursive(startVertex, adjacencyList) {//cuz i just want to practice with graph so now i dont want to check logic 
  const result = [];
  function helperFunc(startVertex, trackingVisited) {
   if (trackingVisited[startVertex]) {
    return;
   }
   // console.log("WELL", trackingVisited);
   trackingVisited[startVertex] = true;
   result.push(startVertex);
   for (const vertex of adjacencyList[startVertex]) {//iterate all neighbours
    if (!trackingVisited[vertex]) {
     helperFunc(vertex, trackingVisited);
    }
   }
  }

  const trackingVisited = {};
  helperFunc(startVertex, trackingVisited);
  console.log(result);
 }

 depthFirstSearchIterative(startVertex) {
  const result = [];
  const trackingVisited = [];
  trackingVisited.push(startVertex);
  while (trackingVisited.length) {
   const getVertex = trackingVisited.shift();
   if (!result.includes(getVertex)) {
    result.push(getVertex);
    for (const vertex of this.adjacencyList[getVertex]) {
     if (!trackingVisited.includes(vertex)) {
      trackingVisited.push(vertex);
     }
    }
   }
  }
  console.log(result);
 }

 breadthFirstSearch(startVertex) {
  function helperFunc(startVertex, listOfVertex) {
   if (trackingVisited[startVertex]) {
    return;
   }
   for (const vertex of listOfVertex[startVertex]) {
    if (!result.includes(vertex)) {
     result.push(vertex);
    }
    stack.push(vertex);
   }
   trackingVisited[startVertex] = true;
   const getVertex = stack.pop();
   helperFunc(getVertex, listOfVertex);
  }
  const result = [];
  const trackingVisited = {};
  const listOfVertex = this.adjacencyList;
  const stack = [];
  result.push(startVertex);
  helperFunc(startVertex, listOfVertex);
  console.log(result);
 }

 breadthFirstSearchBetter(startVerdex) {
  const result = [];
  const trackingVisited = {};
  trackingVisited[startVerdex] = true;//mark it visited
  const queue = [startVerdex];
  let currentVertex;

  while (queue.length) {
   currentVertex = queue.shift();
   result.push(currentVertex);
   for (const vertex of this.adjacencyList[currentVertex]) {
    if (!trackingVisited[vertex]) {
     trackingVisited[vertex] = true;
     queue.push(vertex);
    }
   }
  }
  console.log(result);
 }

 show() {
  console.log(this.adjacencyList);
 }
}

//test
const graph = new Graph();
// graph.addVertex("My girl");
// graph.addVertex("Me");
// graph.addVertex("MiMi");
// graph.addEdge("MiMi", "My girl");
// graph.addEdge("Me", "My girl");
// graph.removeVertex("Me");
// graph.show();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// graph.depthFirstSearchRecursive("A", graph.adjacencyList);
// graph.depthFirstSearchIterative("A");
// graph.breadthFirstSearch("A");
graph.breadthFirstSearchBetter("A");