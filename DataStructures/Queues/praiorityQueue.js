function PriorityQueue() {
  var collection = [];

  this.printCollection = () => {
    console.log(collection);
  };

  this.enqueue = element => {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (let i = 0; i < collection.length; i++) {
        console.log(collection[i][1]);

        console.log(element[1]);

        if (element[1] < collection[i][1]) {
          //checking praiority
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = () => {
    var value = collection.shift();
    return value[0];
  };
  this.fornt = () => {
    return collection[0];
  };
  this.size = () => {
    return collection.length;
  };
  this.isEmpty = () => {
    return collection.length === 0;
  };
}

const pq = new PriorityQueue();
pq.enqueue(['Arpit', 2]);
pq.enqueue(['Rahul', 3]);
pq.enqueue(['Shivam', 1]);
pq.enqueue(['Rockey', 2]);
// console.log(pq.fornt());

// pq.printCollection();
// pq.dequeue();
// pq.fornt();
// pq.printCollection();
