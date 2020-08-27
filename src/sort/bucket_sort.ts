import insertionSort from "./insertion_sort";

function createBuckets(array, bucketSize) {
  let minValue = Math.min.apply(null, array);
  let maxValue = Math.max.apply(null, array);

  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }
  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(array[i]);
  }
  return buckets;
}
function sortBuckets(buckets) {
  const sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      insertionSort(buckets[i]);
      sortedArray.push(...buckets[i]);
    }
  }
  return sortedArray;
}
export function bucketSort(array, bucketSize = 5) {
  if (array.length < 2) {
    return array;
  }
  const buckets = createBuckets(array, bucketSize);
  return sortBuckets(buckets);
}
