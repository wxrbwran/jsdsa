// abstract class AbsSet {
//   abstract add(value): void;
//   abstract delete(value): boolean;
// }

class NewSet {
  public items;
  constructor(items?) {
    this.items = items || {};
  }
  add(value: any): boolean {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }
  delete(value: any): boolean {
    if (!this.has(value)) {
      return false;
    }
    delete this.items[value];
    return true;
  }
  has(value): boolean {
    return value in this.items;
  }
  clear(): void {
    this.items = {};
  }
  size(): number {
    return Object.keys(this.items).length;
  }
  values() {
    return Object.values(this.items);
  }
  // A∪B
  union(otherSet: NewSet): NewSet {
    let values = this.values();
    let otherValues = otherSet.values();
    const newValues = { ...values, otherValues };
    return new NewSet(newValues);
  }
  // A∩B
  intersection(otherSet: NewSet): NewSet {
    const values = this.values();
    const length = values.length;
    const newSet = new NewSet();
    for (let i = 0; i < length; i++) {
      if (otherSet.has(values[i])) {
        newSet.add(values[i]);
      }
    }
    return newSet;
  }
  // A-B
  differnece(otherSet: NewSet): NewSet {
    const values = this.values();
    const length = values.length;
    const newSet = new NewSet();
    for (let i = 0; i < length; i++) {
      if (!otherSet.has(values[i])) {
        newSet.add(values[i]);
      }
    }

    return newSet;
  }
  subSet(otherSet: NewSet): boolean {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      let values = this.values();
      const length = this.size();
      for (let i = 0; i < length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
    }
    return true;
  }
}
export default Set;
