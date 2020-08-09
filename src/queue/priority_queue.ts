class QueueElement {
  public element;
  public priority;
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}
// 最小优先队列
class PriorityQueue {
  protected items;
  constructor(arr?) {
    this.items = arr || [];
  }
  enqueue(element, priority): void {
    const queueElement: QueueElement = new QueueElement(element, priority);
    const length = this.size();
    if (length === 0) {
      this.items.push(queueElement);
    } else {
      for (let i = 0; i < length; i++) {
        if (this.items[i].priority > queueElement.priority) {
          this.items.splice(i, 0, queueElement);
          break;
        }
      }
    }
  }
  size(): number {
    return this.items.length;
  }
  print(): void {
    for (let ele of this.items) {
      console.log(`${ele.element}: ${ele.priority}`);
    }
  }
}

export default PriorityQueue;
// let priorityQueue = new PriorityQueue();
// priorityQueue.enqueue("John", 2);
// priorityQueue.enqueue("Jack", 1);
// priorityQueue.enqueue("Camila", 1);
// priorityQueue.print();
