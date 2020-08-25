import selectionSort from "./selection_sort";

describe("测试选择排序", () => {
  it("sort", () => {
    const arr = [34, 45, 5, 567, 67, 1, 23, 123];
    const res = selectionSort(arr);
    expect(res).toEqual([1, 5, 23, 34, 45, 67, 123, 567]);
  });
});
