const mergeSort = (array) => {
  if (array.length > 1) {
    const { length } = array;
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle));
    // console.log("left", left);

    const right = mergeSort(array.slice(middle, length));
    // console.log("right", right);

    array = merge(left, right);
  }
  return array;
};

const merge = (left, right) => {
  let i = 0;
  let j = 0;
  const res = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  if (i < left.length) {
    return res.concat(left.slice(i));
  } else {
    return res.concat(right.slice(j));
  }
};
//  const arr = [34, 45, 5, 567, 67, 1, 23, 123];

export default mergeSort;

// O(nlogn)
