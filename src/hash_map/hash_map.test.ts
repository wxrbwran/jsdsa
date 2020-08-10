import HashMap from './hash_map';

let hash: HashMap | null;
beforeEach(() => {
  hash = new HashMap();
})
afterEach(() => {
  hash = null;
});

describe("HashMap", () => {
  it("set方法", () => {
    hash.put('Gandalf', 'gandalf@email.com');
    hash.put('John', 'johnsnow@email.com');
    hash.put('Tyrion', 'tyrion@email.com');
    expect(hash.get("Gandalf")).toBe('gandalf@email.com');
    hash.remove("Gandalf");
    expect(hash.get("Gandalf")).toBeUndefined();

    hash.put('Gandalf', 'gandalf@email.com');
    hash.put('John', 'johnsnow@email.com'); 
    hash.put('Tyrion', 'tyrion@email.com');
    hash.put('Aaron', 'aaron@email.com');
    hash.put('Donnie', 'donnie@email.com');
    hash.put('Ana', 'ana@email.com');
    hash.put('Jonathan', 'jonathan@email.com');
    hash.put('Jamie', 'jamie@email.com');
    hash.put('Sue', 'sue@email.com');
    hash.put('Mindy', 'mindy@email.com');
    hash.put('Paul', 'paul@email.com');
    hash.put('Nathan', 'nathan@email.com');
    hash.print();
  })
});
