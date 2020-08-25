import insertionSort from "./insertion_sort";

beforeEach(() => {});
afterEach(() => {});

describe("测试插入排序", () => {
  it("sort", () => {
    const arr = [34, 45, 5, 567, 67, 1, 23, 123];
    const res = insertionSort(arr);
    expect(res).toEqual([1, 5, 23, 34, 45, 67, 123, 567]);
  });
});
