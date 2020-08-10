import Dictionary from './dictionary';

let dictionary: Dictionary | null;
beforeEach(() => {
  dictionary = new Dictionary();
})
afterEach(() => {
  dictionary = null;
});

describe("Dictionary", () => {
  it("set方法", () => {
    dictionary.set('Gandalf', 'gandalf@email.com');
    dictionary.set('John', 'johnsnow@email.com');
    dictionary.set('Tyrion', 'tyrion@email.com');
    expect(dictionary.size()).toBe(3);
    expect(dictionary.get("Gandalf")).toBe('gandalf@email.com');
    // dictionary.print()
    // console.log(dictionary.keys());
    // console.log(dictionary.values());
    // dictionary.delete("John");
    // dictionary.print()

  })
});
