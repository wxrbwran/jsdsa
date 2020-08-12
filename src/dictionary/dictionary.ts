class Dictionary {
  public items;
  constructor(items?) {
    this.items = items || {};
  }
  set(key, value: any): void {
    this.items[key] = value;
  }
  get(key) {
    return this.items[key];
  }
  delete(key: any): boolean {
    if (!this.has(key)) {
      return false;
    }
    delete this.items[key];
    return true;
  }
  has(key): boolean {
    return key in this.items;
  }
  clear(): void {
    this.items = {};
  }
  size(): number {
    return this.keys().length;
  }
  keys() {
    return Object.keys(this.items);
  }
  values() {
    return Object.values(this.items);
  }
  print() {
    console.log(this.items);
  }
}

export default Dictionary;
