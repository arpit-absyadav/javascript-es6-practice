let { MySet } = require('./set_with_function');
const setA = new MySet();
const setB = new MySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');
setB.add('e');
console.log(setB.values());

console.log(setA.subset(setB));
console.log(setA.intersection(setB)); //will return the set
console.log(setA.intersection(setB).values()); // gettig values

const u_setA = new MySet();
const u_setB = new MySet();
u_setA.add('f');
u_setA.add('h');
u_setA.add('k');
u_setA.add('f');
u_setB.add('b');
u_setB.add('c');
u_setB.add('a');
u_setB.add('d');
u_setB.add('e');
console.log(u_setA.union(u_setB).values());
