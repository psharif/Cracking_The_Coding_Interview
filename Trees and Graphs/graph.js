/// Visit this link for explanation
/// These classes are constructed from examples provided in the below link
/// https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/#Adjacency-List-Graph-OO-Implementation
class Node {
  constructor(value) {
    this.value = value;
    this.adjacentNodes = [];
  }

  addAdjacent(node) {
    this.adjacentNodes.push(node);
  }

  removeAdjacent(node) {
    const index = this.adjacentNodes.indexOf(node);
    if(index > -1){
      this.adjacentNodes.splice(index, 1);
      return node;
    }
  }

  getAdjacents(){
    return this.adjacentNodes;
  }

  isAdjacent(){
    return this.adjacentNodes.indexOf(node) > -1;
  }
}

class Graph {
  constructor(edgeDirection = 'directed'){
    this.nodes = new Map();
    this.edgeDirection = edgeDirection;
  }

  addEdge(source, destination) {
    const sourceNode = this.addVertex(source);
    const destinationNode = this.addVertex(destination);

    sourceNode.addAdjacent(destinationNode);

    if(this.edgeDirection = 'undirected') {
      destinationNode.addAdjacent(sourceNode);
    }

    return [sourceNode, destinationNode];
  }

  addVertext(value) {
    if(this.adjacentNodes.has(value)) {
      return this.nodes.get(value);
    }

    const node = new Node(Value);
    this.nodes.set(value, node);
    return node;
  }

  removeVertext() {
    const current = this.nodes.get(value);
    if(current){
      for(let node of this.nodes.values()){
        node.removeAdjacent(current);
      }
    }
    return this.nodes.delete(current);
  }

  removeEdge(source, destination) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if(sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destinationNode);

      if(this.edgeDirection === Graph.UNDIRECTED) {
        destinationNode.removeAdjacent(sourceNode);
      }
    }

    return [sourceNode, destinationNode];
  }

  getNodes(){
    return this.nodes;
  }
  /*
  *bfs(first) {
    const visited = new Map();
    const visitList = new Queue();

    visitList.add(first);

    while(!visitList.isEmpty()) {
      const node = visitList.remove();
      if(node && !visited.has(node)) {
        yield node;
        visited.set(node);
        node.getAdjacents().forEach(adj => visitList.add(adj));
      }
    }
  }

  *dfs(first) {
    const visited = new Map();
    const visitList = new Stack();

    visitList.add(first);

    while(!visitList.isEmpty()) {
      const node = visitList.remove();
      if(node && !visited.has(node)) {
        yield node;
        visited.set(node);
        node.getAdjacents().forEach(adj => visitList.add(adj));
      }
    }
  }
  */
}

const graph = new Graph('directed');

const [first] = graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(5, 2);
graph.addEdge(6, 3);
graph.addEdge(7, 3);
graph.addEdge(8, 4);
graph.addEdge(9, 5);
graph.addEdge(10, 6);

console.log(values); // [1, 4, 8, 3, 7, 6, 10, 2, 5, 9]


module.exports = { Node, Graph };
