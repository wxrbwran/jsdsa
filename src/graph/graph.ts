import Dictionary from "../dictionary/dictionary";
import Queue from "../queue/queue";
// import Stack from "../stack/stack";
class Graph {
  private vertics;
  private adjList;
  private time;
  constructor() {
    this.vertics = [];
    this.adjList = new Dictionary();
    this.time = 0;
  }
  getVertics() {
    return this.vertics;
  }
  addVertex(v) {
    this.vertics.push(v);
    this.adjList.set(v, []);
  }
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }
  initializeColor() {
    let color = [];
    for (let i = 0; i < this.vertics.length; i++) {
      color[this.vertics[i]] = "white"; // 1
    }
    return color;
  }
  bfs(v, callback) {
    let color = this.initializeColor(); //2
    let queue = new Queue(); //3
    queue.enqueue(v); //4
    while (!queue.isEmpty()) {
      //5
      let u = queue.dequeue(); //6
      let neighbors = this.adjList.get(u); //7
      color[u] = "grey"; //8
      for (let i = 0; i < neighbors.length; i++) {
        //9
        let w = neighbors[i]; //10
        if (color[w] === "white") {
          //11
          color[w] = "grey"; //12
          queue.enqueue(w); //13
        }
      }
      color[u] = "black"; //14
      if (callback) {
        //15
        callback(u);
      }
    }
  }
  BFS(v) {
    let color = this.initializeColor();
    let queue = new Queue();
    let distances = []; //1 距离
    let pred = []; //2 前溯点
    queue.enqueue(v);
    for (var i = 0; i < this.vertics.length; i++) {
      //{3}
      distances[this.vertics[i]] = 0; //4
      pred[this.vertics[i]] = null; //5
    }

    while (!queue.isEmpty()) {
      let u = queue.dequeue(),
        neighbors = this.adjList.get(u);
      color[u] = "grey";
      for (i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] === "white") {
          color[w] = "grey";
          distances[w] = distances[u] + 1; //6
          pred[w] = u; //7
          queue.enqueue(w);
        }
      }
      color[u] = "black";
    }
    return {
      //{8}
      distances: distances,
      predecessors: pred,
    };
  }
  dfs(callback) {
    let color = this.initializeColor();
    for (let i = 0; i < this.vertics.length; i++) {
      if (color[this.vertics[i]] === "white") {
        this.dfsVisit(this.vertics[i], color, callback);
      }
    }
  }
  dfsVisit(u, color, callback) {
    color[u] = "grey";
    if (callback) {
      callback(u);
    }
    let neighbors = this.adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i];
      if (color[w] === "white") {
        this.dfsVisit(w, color, callback);
      }
    }
    color[u] = "black";
  }
  DFS() {
    var color = this.initializeColor(), //{2}
      d = [],
      p = [],
      f = [];
    for (var i = 0; i < this.vertics.length; i++) {
      //{3}
      const vertex = this.vertics[i];
      f[vertex] = 0;
      d[vertex] = 0;
      p[vertex] = null;
    }
    for (i = 0; i < this.vertics.length; i++) {
      const vertex = this.vertics[i];
      if (color[vertex] === "white") {
        this.DFSVisit(vertex, color, d, f, p);
      }
    }
    // 4
    return { discovery: d, finished: f, predecessors: p };
  }
  DFSVisit(u, color, d, f, p) {
    console.log("discovered " + u);
    color[u] = "grey";
    d[u] = ++this.time; //{5}
    var neighbors = this.adjList.get(u);
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];
      if (color[w] === "white") {
        p[w] = u; //6
        this.DFSVisit(w, color, d, f, p);
      }
    }
    color[u] = "black";
    f[u] = ++this.time; //{7}
    console.log("explored " + u);
  }
  toString() {
    let s = "";
    for (let i = 0; i < this.vertics.length; i++) {
      s += `${this.vertics[i]}  -> `;
      const list = this.adjList.get(this.vertics[i]);
      for (let j = 0; j < list.length; j++) {
        s += `${list[j]} `;
      }
      s += "\n";
    }
    return s;
  }

  // 最短路径算法
  // dijkstra
  dijkstra(src, point) {
    // src => 邻接矩阵 -> 二维数组
    const minDistance = (dist, visited) => {
      var min = Infinity,
        minIndex = -1;
      for (var v = 0; v < dist.length; v++) {
        if (visited[v] == false && dist[v] <= min) {
          min = dist[v];
          minIndex = v;
        }
      }
      return minIndex;
    };
    var dist = [],
      visited = [],
      length = src.length;
    for (var i = 0; i < length; i++) {
      //{1}
      dist[i] = Infinity;
    }
    dist[point] = 0; //{2}
    for (var i = 0; i < length - 1; i++) {
      //{3}
      var u = minDistance(dist, visited);
      visited[u] = true; //{5}
      for (var v = 0; v < length; v++) {
        console.log(u, v);
        if (
          !visited[v] &&
          src[u] &&
          src[u][v] != 0 &&
          dist[u] != Infinity &&
          dist[u] + src[u][v] < dist[v]
        ) {
          //{6}
          dist[v] = dist[u] + src[u][v]; //{7} }
        }
      }
      return dist;
    }
  }
  // floydWarshall
  floydWarshall(graph) {
    let dist = [],
      length = graph.length,
      i,
      j,
      k;
    for (i = 0; i < length; i++) {
      dist[i] = [];
      for (j = 0; j < length; j++) {
        dist[i][j] = graph[i][j];
      }
    }
    for (k = 0; k < length; k++) {
      for (i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }
    return dist;
  }
}

export default Graph;
