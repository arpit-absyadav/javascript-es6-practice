# `Call Function Immediatly`

```javascript
function add(x) {
  return function(y) {
    return x + y;
  };
}
// First Way
var addTwo = add(2);
console.log(addTwo(4)); // === 6
// Second way
console.log(add(2)(4)); // 6
```

## `Same concept with ES6`

```javascript
// With arrow function
let addFn = x => y => x + y;
console.log(addFn(2)(4));
```
