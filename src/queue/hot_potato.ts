import Queue from "./queue";
class HotPotato {
  protected names: string[];
  protected nums: number;
  constructor(names, nums) {
    this.names = names;
    this.nums = nums;
  }
  play() {
    let queue = new Queue(this.names);
    let selected = "";
    while (queue.size() > 1) {
      for (let i = 0; i < this.nums; i++) {
        queue.enqueue(queue.dequeue());
      }
      selected = queue.dequeue();
      console.log(`${selected} out !`);
    }
    console.log(`${queue.front()} win !`);
  }
}
const names = ["John", "Jack", "Camila", "Ingrid", "Carl", "xr"];
const hot_potato = new HotPotato(names, 9);
hot_potato.play();
