import { swap, defaultCompare, Compare } from "../util";
class MinHeap {
  private heap;
  public compareFn;
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }
  getLeftIndex(index) {
    return index * 2 + 1;
  }
  getRightIndex(index) {
    return index * 2 + 2;
  }
  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }
  insert(val) {
    if (val) {
      this.heap.push(val);
      this.siftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }
  siftUp(index) {
    let parent = this.getParentIndex(index);
    while (
      index > 0 &&
      this.compareFn(this.heap[parent], this.heap[index]) > Compare.BIGGER_THAN
    ) {
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(parent);
    }
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  findMinNode() {
    return this.isEmpty() ? undefined : this.heap[0];
  }
  extract() {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }
    const removed = this.heap.shift();
    this.siftDown(0);
    return removed;
  }
  siftDown(index) {
    let ele = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();
    if (
      left < size &&
      this.compareFn(this.heap[ele], this.heap(left)) > Compare.BIGGER_THAN
    ) {
      ele = left;
    }
    if (
      right < size &&
      this.compareFn(this.heap[ele], this.heap(right)) > Compare.BIGGER_THAN
    ) {
      ele = right;
    }
    if (index !== ele) {
      swap(this.heap, index, ele);
      this.siftDown(ele);
    }
  }
}
export default MinHeap;
