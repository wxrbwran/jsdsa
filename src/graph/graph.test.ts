import Graph from "./graph";

let graph;

beforeAll(() => {
  graph = new Graph();
});

afterAll(() => {
  graph = null;
});
const printNode = (val) => {
  console.log(`visited vertex: ${val}`);
};
describe("Graph", () => {
  it("add: 添加节点叶线段", () => {
    const myVertices = ["A", "B", "C", "D", "E", "F"];
    for (let i = 0; i < myVertices.length; i++) {
      graph.addVertex(myVertices[i]);
    }
    graph.addEdge("A", "C");
    graph.addEdge("A", "D");
    graph.addEdge("B", "D");
    graph.addEdge("B", "E");
    graph.addEdge("C", "F");
    graph.addEdge("F", "E");
  });
  it("bfs", () => {
    graph.bfs(graph.getVertics()[0], printNode);
  });
  it("BFS", () => {
    const res = graph.BFS(graph.getVertics()[0]);
    console.log(res);
  });
  it("dfs", () => {
    graph.dfs(printNode);
  });
  it("DFS", () => {
    const res = graph.DFS();
    console.log(res);
  });
  // it("dijkstra", () => {
  //   var graph_martix = [
  //     [0, 2, 4, 0, 0, 0],
  //     [0, 0, 1, 4, 2, 0],
  //     [0, 0, 0, 0, 3, 0],
  //     [0, 0, 0, 0, 0, 2],
  //     [0, 0, 0, 3, 0, 2],
  //     [0, 0, 0, 0, 0, 0],
  //   ];
  //   const res = graph.dijkstra(graph_martix, 0);
  //   console.log(res);
  // });
  it("floydWarshall", () => {
    var graph_martix = [
      [0, 2, 4, 0, 0, 0],
      [0, 0, 1, 4, 2, 0],
      [0, 0, 0, 0, 3, 0],
      [0, 0, 0, 0, 0, 2],
      [0, 0, 0, 3, 0, 2],
      [0, 0, 0, 0, 0, 0],
    ];
    const res = graph.floydWarshall(graph_martix);
    console.log(res);
  });
});
