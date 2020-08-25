import Dictionary from "../dictionary/dictionary";
import Queue from "../queue/queue";
// import Stack from "../stack/stack";
const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
};
class Graph {
  private vertices;
  private adjList;
  private time;
  public isDirected;
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
    this.time = 0;
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }
  addEdge(v, w) {
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }
    this.adjList.get(v).push(w);
    if (!this.isDirected) {
      this.adjList.get(w).push(v);
    }
  }
  getVertics() {
    return this.vertices;
  }
  getAdjList() {
    return this.adjList;
  }
  initializeColor(vertices) {
    let color = {};
    for (let i = 0; i < vertices.length; i++) {
      color[vertices[i]] = Colors.WHITE; // 1
    }
    return color;
  }
  toString() {
    let s = "";
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]}  -> `;
      const list = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < list.length; j++) {
        s += `${list[j]} `;
      }
      s += "\n";
    }
    return s;
  }
}

export const bfs = (graph, startVertex, callback) => {
  const vertices = graph.getVertics();
  const adjList = graph.getAdjList();
  const colors = graph.initializeColor(vertices);
  const queue = new Queue();
  queue.enqueue(startVertex);

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    colors[u] = Colors.GREY;
    const neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (colors[w] === Colors.WHITE) {
        colors[w] = Colors.GREY;
        queue.enqueue(w);
      }
    }
    colors[u] = Colors.BLACK;
    if (callback) {
      callback(u);
    }
  }
};

export const BFS = (graph, startVertex) => {
  const vertices = graph.getVertics();
  const adjList = graph.getAdjList();
  const color = graph.initializeColor(vertices);
  const queue = new Queue();
  const distances = {};
  const predecessors = {};
  queue.enqueue(startVertex);
  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }
  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        distances[w] = distances[u] + 1;
        predecessors[w] = u;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
  }
  return {
    distances,
    predecessors,
  };
};

export const dfs = (graph, callback) => {
  const vertices = graph.getVertics();
  const adjList = graph.getAdjList();
  const colors = graph.initializeColor(vertices);
  for (let i = 0; i < vertices.length; i++) {
    if (colors[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], colors, adjList, callback);
    }
  }
};

const depthFirstSearchVisit = (u, colors, adjList, callback) => {
  colors[u] = Colors.GREY;
  if (callback) {
    callback(u);
  }
  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (callback[w] === Colors.WHITE) {
      depthFirstSearchVisit(w, colors, adjList, callback);
    }
  }
  colors[u] = Colors.BLACK;
};

export default Graph;
