const insertionSort = (array) => {
  const { length } = array;
  let tmp;
  for (let i = 1; i < length; i++) {
    let j = i;
    tmp = array[i];
    while (j > 0 && array[j - 1] > tmp) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = tmp;
  }
  return array;
};
// 【3，5，1，4，2】

export default insertionSort;

// O(n²)
