export default function countingSort(array) {
  if (array.length < 2) {
    return array;
  }
  const maxValue = Math.max.apply(null, array);
  let sortedIndex = 0;
  const counts = new Array(maxValue + 1);
  array.forEach((element) => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });
  console.log(counts);

  console.log("Frequencies: " + counts.join());
  counts.forEach((element, i) => {
    while (element > 0) {
      array[sortedIndex] = i;
      sortedIndex++;
      element--;
    }
  });
  return array;
}
