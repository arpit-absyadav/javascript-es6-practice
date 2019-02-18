/**
 * Queue: `Queue Data Struture`
 */
function Queue() {
  // array to handle data
  this.collection = [];

  // adding data in queue
  this.enqueue = element => this.collection.push(element);

  // removing form queue
  this.dequeue = () => this.collection.shift();

  // getting front from queue
  this.front = () => this.collection[0];

  // getting the size of queue
  this.size = () => this.collection.length;

  // check the queue is empty or not
  this.isEmpty = () => this.collection.length === 0;

  // returnting the whole queue
  this.getQ = () => this.collection;
}

// tests
const q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
console.log(q.front());
// q.dequeue();
console.log(q.size());
console.log(q.getQ());

// console.log(q.isEmpty());
// console.log(q.dequeue());
