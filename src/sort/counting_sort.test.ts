import countingSort from "./counting_sort";

beforeEach(() => {});
afterEach(() => {});

describe("测试计数排序", () => {
  it("sort", () => {
    const arr = [3, 14, 25, 36, 7, 2, 3];
    const res = countingSort(arr);
    console.log(res);
    expect(res).toEqual([2, 3, 3, 7, 14, 25, 36]);
  });
});
