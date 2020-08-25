import quickSort from "./quick_sort";

describe("测试快速排序", () => {
  it("sort", () => {
    const arr = [34, 45, 5, 567, 67, 1, 23, 123];
    const res = quickSort(arr);
    console.log(res);
    expect(res).toEqual([1, 5, 23, 34, 45, 67, 123, 567]);
  });
});
