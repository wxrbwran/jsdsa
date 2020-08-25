import binarySearch from "./binary_search";

describe("测试二分搜索", () => {
  it("search", () => {
    const arr = [1, 2, 3, 4, 5];
    const res = binarySearch(arr, 2);
    console.log(res);
    expect(res).toBe(1);
  });
});
