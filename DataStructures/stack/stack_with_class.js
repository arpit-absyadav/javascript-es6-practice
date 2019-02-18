class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  pop() {
    if (this.count === 0) return undefined;
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  peek() {
    if (this.count === 0) return null;
    return this.storage[this.count - 1];
  }
  size() {
    return count;
  }
}

// Testing Stack
let bookSelf = new Stack();
bookSelf.push('Conplete Data Structure');
bookSelf.push('Conplete Data Structure1');
bookSelf.push('Conplete Data Structure2');
bookSelf.push('Conplete Data Structure3');
console.log(bookSelf.pop());

console.log(bookSelf.peek());
// bookSelf.pee
