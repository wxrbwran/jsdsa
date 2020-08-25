import quickSort from "../sort/quick_sort";

const binarySearch = (array, val) => {
  const sortedArray = quickSort(array);
  let low = 0;
  let high = sortedArray.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = sortedArray[mid];
    if (element < val) {
      low = mid + 1;
    } else if (element > val) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

export default binarySearch;
