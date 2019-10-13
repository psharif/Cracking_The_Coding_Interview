const { Graph, Node } = require("./graph.js");

/// Watched this video for explanation
/// Looked at this code for solution.

// Build Order: You are given a list of projects and a
// list of dependencies (which is a list of pairs of projects,
// where the second project is dependent on the first project).
// All of aproject's dependencies must be built before the project is.
// Find a build order that will allow the projects to be built.
// If there is no valid build order, return an error.

// EXAMPLE
// Input:
// projects: a, b, c, d, e, f
// dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
// Output:f, e, a, b, d, c

const topoSort = graph => {
  /// Keeps the order of the sort
  let stack = [];
  const visited = new Set();

  for (let node of graph.getNodes()) {
    if (!visited.has(node[1])) {
      helper(node[1], visited, stack);
    }
  }

  while (stack.length > 0) {
    const { value } = stack.pop();
    console.log(value);
  }
};

const helper = (node, visited, stack) => {
  /// Add the node to the list
  visited.add(node);
  /// Visit the adjacent Nodes to see if they need to visited.
  for (let adj of node.getAdjacents()) {
    /// If the nodes have not been visited. Visit them.
    if (!visited.has(adj)) {
      helper(adj, visited, stack);
    }
  }
  /// This node no longer has children so add it to the stack.
  stack.push(node);
};

const graph = new Graph("directed");

//(a, d), (f, b), (b, d), (f, a), (d, c);
graph.addEdge("a", "d");
graph.addEdge("f", "b");
graph.addEdge("b", "d");
graph.addEdge("f", "a");
graph.addEdge("d", "c");
graph.addVertex("e");

topoSort(graph);
//var g = graph.getNodes();
