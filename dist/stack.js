var Stack = /** @class */ (function () {
    function Stack(items) {
        this.items = items || new Array();
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items.shift();
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.clear = function () {
        this.items.length = 0;
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.print = function () {
        console.log(this.items.toString());
    };
    return Stack;
}());
var s = new Stack();
s.print();
s.push(1);
s.print();
s.push(2);
s.push(3);
s.push(4);
s.push(5);
console.log(s.size());
s.print();
console.log(s.peek());
console.log(s.pop());
s.print();
var s2 = new Stack([1, 2, 3, 4, 5, 5, 5, 5, 5, 5]);
s2.print();
