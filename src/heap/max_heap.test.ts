import MaxHeap from "./max_heap";

let max_heap;
beforeEach(() => {
  max_heap = new MaxHeap();
});
afterEach(() => {
  max_heap = null;
});

describe("测试最大堆", () => {
  it("insert", () => {
    max_heap.insert(2);
    // list.append(10);
    // list.append(5);
    // list.append(0);
    // expect(list.length).toBe(4);
    max_heap.insert(7);
    max_heap.insert(4);
    max_heap.insert(5);
    max_heap.insert(1);
    console.log(max_heap);
    console.log(max_heap.findMinimum());
  });
});
