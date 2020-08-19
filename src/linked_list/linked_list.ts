export class NodeElement {
  public element;
  public next;
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  private length = 0;
  private head;
  append(element) {
    let node = new NodeElement(element);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  insert(position, element) {
    if (position > -1 && position <= this.length) {
      let node = new NodeElement(element);
      let current = this.head;
      let index = 0;
      let previous;
      if (position === 0) {
        this.head = node;
        this.head.next = current;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = node;
        node.next = current;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }
  removeAt(position: number) {
    if (position > -1 && position < this.length) {
      let current = this.head;
      let index = 0;
      let previous;
      if (position === 0) {
        this.head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    } else {
      return null;
    }
  }
  remove(element) {
    const index = this.indexOf(element);
    this.removeAt(index);
  }
  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.element === element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
  getHead() {
    return this.head;
  }
  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      string += `${current.element}\n`;
      current = current.next;
    }
    return string;
  }
  print() {
    this.toString();
  }
}
export default LinkedList;

// let list = new LinkedList();
// list.append(15);
// list.append(10);
// list.append(5);
// list.append(0);

// // list.insert(2, 8);
// console.log(list.toString());
// console.log(list.indexOf(5));

// console.log(list, list.length);
