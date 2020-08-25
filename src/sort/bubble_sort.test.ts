import bubbleSort from "./bubble_sort";

beforeEach(() => {});
afterEach(() => {});

describe("测试冒泡排序", () => {
  it("sort", () => {
    const arr = [34, 45, 5, 567, 67, 1, 23, 123];
    const res = bubbleSort(arr);
    expect(res).toEqual([1, 5, 23, 34, 45, 67, 123, 567]);
  });
});
