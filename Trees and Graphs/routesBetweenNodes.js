const { Graph, Node } = require('./graph.js');
const { Queue } = require('../Linked\ Lists/queue.js');

const routeBetweenNodes = (graph, start, end) => {
  if(start == end)
    return true;

  for(node u of graph.getNodes()){
    u.state = 'unvisited';
  }

  /// Create a queue.
  const q = new Queue();
  q.enqueue(start);
  Node u;
  while(!q.isEmpty()) {
    u = q.dequeue();
    if(u) {
      for(let v in q.getNodes()) {
        if(v.state == 'unvisited'){
          if(v == end){
            return true;
          }
          else {
            v.state = 'visiting';
            q.add(v);
          }
        }
      }
      u.state = visited;
    }
  }
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
