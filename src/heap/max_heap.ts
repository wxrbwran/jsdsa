import { reverseCompare, defaultCompare } from "../util";
import MinHeap from "./min_heap";
class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.compareFn = reverseCompare(compareFn);
  }
}
export default MaxHeap;
