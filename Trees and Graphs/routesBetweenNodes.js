const { Graph, Node } = require("./graph.js");
const { Queue } = require("../Linked Lists/queue.js");

const routeBetweenNodes = (graph, start, end) => {
  if (start == end) return true;

  for (let u of graph.getNodes()) {
    u[1].state = "unvisited";
  }

  /// Create a queue.
  const q = new Queue();
  q.enqueue(start);
  let u;
  while (!q.isEmpty()) {
    u = q.dequeue();
    if (u) {
      for (let v of u.getAdjacents()) {
        if (v.state == "unvisited") {
          if (v == end) {
            return true;
          } else {
            v.state = "visiting";
            q.enqueue(v);
          }
        }
      }
      u.state = "visited";
    }
  }
  return false;
};

const graph = new Graph("directed");

const [first] = graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(3, 4);
graph.addEdge(5, 9);
graph.addEdge(4, 6);
graph.addEdge(7, 3);
graph.addEdge(8, 4);
graph.addEdge(9, 5);
graph.addEdge(10, 6);

var g = graph.getNodes();

var result = routeBetweenNodes(graph, g.get(1), g.get(6));

console.log(result);

console.log(graph.getNodes()); // [1, 4, 8, 3, 7, 6, 10, 2, 5, 9]
