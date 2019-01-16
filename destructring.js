// Object Destructring

// let objDestructring = ()=>{
//     let name = 'Arpit'
//     let lname = 'Yadav'
//     return {name, lname}
// }

// let {name, lname} = objDestructring();
// console.log(lname);

// Array  Destructring

// let arrDestructring = ()=>{
//     let name = 'Arpit'
//     let lname = 'Yadav'
//     return [name, lname]
// }

// let [name, lname] = arrDestructring();
// console.log(lname);

let bulk = {
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  e: "e",
  f: "f",
  g: "g",
  h: "h",
  i: "i",
  j: "j",
  k: "k",
  l: "l"
};

// will get the a property
let {a: first, l: second} = bulk;
console.log(first);
console.log(second);
