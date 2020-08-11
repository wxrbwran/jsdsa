import LinkedList from "../linked_list/linked_list";

class ValuePair {
  public key;
  public value;
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[${this.key} - ${this.value}]`;
  }
}
class HashMap {
  public map;
  constructor(map = []) {
    this.map = map;
  }
  private loseloseHashCode(key: string) {
    var hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    // console.log("hash", hash);

    const position = hash % 37;
    // console.log("position", position);
    return position;
  }
  put(key, value) {
    const position = this.loseloseHashCode(key);
    if (this.map[position] === undefined) {
      this.map[position] = new LinkedList();
    }
    this.map[position].append(new ValuePair(key, value));
  }
  remove(key) {
    const position = this.loseloseHashCode(key);
    if (this.map[position] !== undefined) {
      let current = this.map[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          this.map[position].remove(key);
          if (this.map[position].isEmpty()) {
            this.map[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }
      // 检查是否为第一个或最后一个元素
      if (current.element.key === key) {
        this.map[position].remove(current.element);
        if (this.map[position].isEmpty()) {
          this.map[position] = undefined;
        }
        return true;
      }
    }
    return false;
  }
  get(key) {
    const position = this.loseloseHashCode(key);
    if (this.map[position] !== undefined) {
      let current = this.map[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
      if (current.element.key === key) {
        return current.element.value;
      }
    }
    return undefined;
  }
  print() {
    console.log(this.map);
  }
}
export default HashMap;
