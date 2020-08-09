import LinkedList from "./linked_list";

let list;
beforeEach(() => {
  list = new LinkedList();
});
afterEach(() => {
  list = null;
});

describe("测试链表", () => {
  it("append", () => {
    list.append(15);
    list.append(10);
    list.append(5);
    list.append(0);
    expect(list.length).toBe(4);
  });
});
