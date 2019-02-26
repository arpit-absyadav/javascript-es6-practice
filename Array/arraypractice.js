// For each
// This method can help you to loop over array's items.
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
data.forEach(element => {
  console.log(element);
});

// includes()
// This method check if array includes the item passed
// in the method.
console.log('---------------');
console.log(data.includes(2));
console.log([1, 2, 3, 4, 5].includes(7));

// Filter()
// This method create new array with only elements
//  passed condition inside the provided function.
console.log('---------------');
const filterd = data.filter(element => element > 3);
console.log(filterd);

/*********  Map()  **********/
// This method create new array by calling the
// provided function in every element.
console.log('---------------');
const mapped = data.map(elem => elem + 1);
console.log(mapped);

// 2
// create a function to use.
const makesweeter = sweetItem => sweetItem * 2;
const sweeterArray = data.map(makesweeter);
console.log(sweeterArray);

// converting sting to  an array using map
let test = Array.prototype.map.call('Arpit', each => each);
console.log(test);

// modify object
const myUsers = [
  { name: 'chuloo', likes: 'grilled chicken' },
  { name: 'chris', likes: 'cold beer' },
  { name: 'sam', likes: 'fish biscuits' }
];
const userByFood = myUsers.map(item => {
  const container = {};
  container[item.name] = item.likes;
  container.age = item.name.length * 10;
  return container;
});
console.log(userByFood);

/*********  Reduce()********* */
// The reduce() method applies a function against an accumulator and each element in
// the array(from left to right) to reduce it to a single value - MDN

const sum = data.reduce((total, value) => total + value, 0);
console.log(sum);

/*********  Some()********* */
// This method check if at least one of array's item passed the condition.
//  If passed, it return 'true' otherwise 'false'.

let largeNum = data.some(num => num > 4);
console.log(largeNum);

/*********  Every()********* */
// This method check if all array's item passed the condition.
// If passed, it return 'true' otherwise 'false'.

let biggerthen4 = data.every(num => num > 4);
console.log(biggerthen4);

/*********  Sort()********* */
// This method used to arrange / sort array's item either ascending or
//  descending order.

// sort in decending array

let desc = data.sort((a, b) => (a > b ? -1 : 1));
console.log(desc);
const alpha = ['e', 'a', 'c', 'u', 'y'];
let descAlpha = alpha.sort((a, b) => (a > b ? -1 : 1));
console.log(descAlpha);
let ascAlpha = alpha.sort((a, b) => (a > b ? 1 : -1));
console.log(ascAlpha);

/*********  Array.from() ********* */
// This change all thing that are array - like or iterable into
// true array especially when working with DOM,
// so that you can use other array methods like
//  reduce, map, filter and so on.
const name = 'frugence';
const nameArray = Array.from(name);
console.log(nameArray);

/*********  Array.of() ********* */
// This create array from every arguments passed into it.
const nums = Array.of(1, 2, 3, 4, 5, 6);
console.log(nums); // output: [1, 2, 3, 4, 5, 6]
