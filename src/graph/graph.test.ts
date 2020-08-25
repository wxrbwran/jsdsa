import Graph, { bfs, BFS, dfs, DFS } from "./graph";

let graph;

beforeAll(() => {
  graph = new Graph();
  const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
  }
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("A", "D");
  graph.addEdge("C", "D");
  graph.addEdge("C", "G");
  graph.addEdge("D", "G");
  graph.addEdge("D", "H");
  graph.addEdge("B", "E");
  graph.addEdge("B", "F");
  graph.addEdge("E", "I");
});

afterAll(() => {
  graph = null;
});
const printNode = (val) => {
  console.log(`visited vertex: ${val}`);
};
describe("Graph", () => {
  it("add: 添加节点叶线段", () => {
    // console.log(graph.toString());
  });
  // it("bfs", () => {
  //   bfs(graph, "A", printNode);
  // });
  // it("BFS", () => {
  //   const res = BFS(graph, "A");
  //   console.log(res);
  // });
  // it("dfs", () => {
  //   dfs(graph, printNode);
  // });
  it("DFS", () => {
    const res = DFS(graph);
    console.log(res);
  });
});
