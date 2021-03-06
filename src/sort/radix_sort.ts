const getBucketIndex = (value, minValue, significantDigit, radixBase) =>
  Math.floor(((value - minValue) / significantDigit) % radixBase);

const countingSortForRadix = (array, radixBase, significantDigit, minValue) => {
  let bucketsIndex;
  const buckets = [];
  const aux = [];
  for (let i = 0; i < radixBase; i++) {
    buckets[i] = 0;
  }
  for (let i = 0; i < array.length; i++) {
    bucketsIndex = getBucketIndex(
      array[i],
      minValue,
      significantDigit,
      radixBase
    );
    buckets[bucketsIndex]++;
  }
  console.log(1, buckets);
  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1];
  }
  console.log(2, buckets);

  for (let i = array.length - 1; i >= 0; i--) {
    bucketsIndex = getBucketIndex(
      array[i],
      minValue,
      significantDigit,
      radixBase
    );
    aux[--buckets[bucketsIndex]] = array[i];
  }
  console.log(3, aux);

  return aux;
};
export default function radixSort(array, radixBase = 10) {
  if (array.length < 2) {
    return array;
  }
  const minValue = Math.min.apply(null, array);
  const maxValue = Math.max.apply(null, array);
  // Perform counting sort for each significant digit, starting at 1
  let significantDigit = 1;
  while ((maxValue - minValue) / significantDigit >= 1) {
    console.log("radix sort for digit " + significantDigit);
    array = countingSortForRadix(array, radixBase, significantDigit, minValue);
    console.log(array.join());
    significantDigit *= radixBase;
  }
  return array;
}
