class HashMap{
  public map;
  constructor(map = []) {
    this.map = map;
  }
  private loseloseHashCode(key:string) {
    var hash = 0;
    for (let i = 0; i<key.length; i++) {
      hash += key.charCodeAt(i);
    }
    // console.log("hash", hash);

    const position = hash % 37;
    // console.log("position", position);
    return position;
  }
  put(key, value){
    const position = this.loseloseHashCode(key);
    this.map[position] = value;
  }
  remove(key){
    this.map[this.loseloseHashCode(key)] = undefined;
  }
  get(key){
    return this.map[this.loseloseHashCode(key)];
  }
  print() {
    console.log(this.map);
  }
}
export default HashMap;
