class Queue {
  protected items;
  constructor(arr?) {
    this.items = arr || [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

export default Queue;

// let queue = new Queue();
// console.log(queue.isEmpty()); //输出true
// queue.enqueue("John");
// queue.enqueue("Jack");
// queue.enqueue("Tom");
// queue.print();
// console.log(queue.size()); //输出3
// console.log(queue.isEmpty()); //输出false
// queue.dequeue();
// queue.dequeue();
// queue.print();
