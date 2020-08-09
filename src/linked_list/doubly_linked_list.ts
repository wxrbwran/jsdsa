class DoublyNodeElement {
  public element;
  public prev;
  public next;
  constructor(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  private node;
  private length = 0;
  private head;
  private tail;
  // constructor(element) {
  //   this.node = new DoublyNodeElement(element);
  // }
  insert(position: number, element) {
    if (position >= 0 && position <= this.length) {
      let node = new DoublyNodeElement(element);
      let current = this.head;
      let prev;
      let index = 0;
      if (position === 0) {
        // 头部插入
        if (this.head) {
          this.head = node;
          this.head.next = current;
          current.prev = this.head;
        } else {
          this.head = node;
          this.tail = node;
        }
      } else if (position === this.length) {
        // 最后插入
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        let index = 0;
        while (index++ < position) {
          prev = current;
          current = current.next;
        }
        node.next = current;
        node.prev = prev;
        prev.next = node;
        current.prev = node;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }
  removeAt(position: number) {
    if (position >= 0 && position < this.length) {
      let current = this.head;
      let previous;
      let index = 0;
      if (position === 0) {
        this.head = current.next;
        if (this.length === 1) {
          this.tail = null;
        } else {
          this.head.prev = null;
        }
      } else if (position === length) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.length--;
      return current.element;
    } else {
      return null;
    }
  }
}

export default DoublyLinkedList;
