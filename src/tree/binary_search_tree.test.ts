import BinarySearchTree from "./binary_search_tree";

let bst: BinarySearchTree | null;
beforeEach(() => {
  bst = new BinarySearchTree();
  bst.insert(11);
  bst.insert(7);
  bst.insert(15);
  bst.insert(5);
  bst.insert(3);
  bst.insert(9);
  bst.insert(8);
  bst.insert(10);
  bst.insert(13);
  bst.insert(12);
  bst.insert(14);
  bst.insert(18);
  bst.insert(20);
  bst.insert(25);
  bst.insert(6);
});
afterEach(() => {
  // bst = null;
});

function print(val) {
  // console.log(val);
}

describe("BinarySearchTree", () => {
  it("insert", () => {
    // bst.insert(11);
    // bst.insert(7);
    // bst.insert(15);
    // bst.insert(5);
    // bst.insert(20);
    // bst.insert(6);
    // console.log(bst);
  });
  it("inOrderTraverse", () => {
    // console.log("=======inOrderTraverse========");
    bst.inOrderTraverse(print);
    // console.log("=======inOrderTraverse end========");
    // 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
  });
  it("preOrderTraverse", () => {
    // console.log("=======preOrderTraverse========");
    bst.preOrderTraverse(print);
    // console.log("=======preOrderTraverse end========");
    // 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25
  });
  it("postOrderTraverse", () => {
    // console.log("=======postOrderTraverse========");
    bst.postOrderTraverse(print);
    // console.log("=======postOrderTraverse end========");
    // 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11
  });
  it("min", () => {
    expect(bst.min()).toBe(3);
  });
  it("max", () => {
    expect(bst.max()).toBe(25);
  });
  it("search", () => {
    expect(bst.search(20)).toBeTruthy();
    expect(bst.search(1000)).toBeFalsy();
  });
  it("move", () => {
    // bst.remove(15);
    // console.log(bst);
  });
});
