let Stack = function() {
  this.count = 0;
  this.storage = {};

  // adds a value onto the end of stack
  this.push = value => {
    this.storage[this.count] = value;
    this.count++;
  };

  //   removes and returns the value at the end of the stack
  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
  //  return the size of stack
  this.size = () => {
    return this.count;
  };

  //   Returns the veluee  from the top of stack
  this.peek = () => {
    return this.storage[this.count - 1];
  };

  // show the struture of stack
  this.view = () => {
    return this.storage;
  };
};

// Implemantation

var myStack = new Stack();

myStack.push('Arpit');
console.log(myStack.peek()); //Arpit
console.log(myStack.size()); // 1
console.log(myStack.pop()); // 1
console.log(myStack.peek()); // undefined
myStack.push('Arpit');
myStack.push('Yadav');
console.log(myStack.peek()); // yadav (LIFO)

console.log(myStack.view());
