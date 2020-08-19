class Stack {
  private items;
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty(): boolean {
    return this.items.length === 0;
  }
  clear(): void {
    this.items = [];
  }
  size(): number {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

export default Stack;

// const s = new Stack();
// s.print();

// s.push(1);
// s.print();
// s.push(2);
// s.push(3);
// s.push(4);
// s.push(5);
// console.log(s.size());

// s.print();
// console.log(s.peek());
// console.log(s.pop());
// s.print();

// const s2 = new Stack([1, 2, 3, 4, 5, 5, 5, 5, 5, 5]);
// s2.print();
