import mergeSort from "./merge_sort";

describe("测试归并排序", () => {
  it("sort", () => {
    const arr = [34, 45, 5, 567, 67, 1, 23, 123];
    const res = mergeSort(arr);
    // console.log(res);
    expect(res).toEqual([1, 5, 23, 34, 45, 67, 123, 567]);
  });
});
