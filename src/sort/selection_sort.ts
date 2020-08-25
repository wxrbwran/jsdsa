const selectionSort = (array) => {
  const { length } = array;
  let indexMin;
  for (let i = 0; i < length; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (array[indexMin] > array[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      [array[indexMin], array[i]] = [array[i], array[indexMin]];
    }
  }
  return array;
};

export default selectionSort;

// O(n²)
