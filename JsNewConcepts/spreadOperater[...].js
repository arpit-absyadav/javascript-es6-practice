// First Example
// Adding a to b
const a = [1, 2, 3, 4, 5];
const b = [...a, 6, 7, 8];
console.log(a);
console.log(b);

// copy b to c [Clone]
const c = [...b];
console.log("c", c);

// sam thing with object

const old = { a: "Hey", b: "Hi" };
const newObj = { ...old };
console.log(newObj);

// change string to array
const hey = "Hey";
const heyChars = [...hey];
console.log(heyChars);
// check all index also
for (const [i, d] of heyChars.entries()) {
  console.log(i, d);
}

// This operator has some pretty useful applications.
// The most important one is the ability to use an array as function argument in a very simple way:

// (in the past you could do this using f.apply(null, a) but that’s not as nice and readable)

const f = (foo, bar) => foo + bar;
const g = [1, 2];
console.log(f(...g)); // will return 3
