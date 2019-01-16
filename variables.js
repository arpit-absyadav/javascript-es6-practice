let a = 10;
function test() {
    let a = 20;
    console.log('inside');

    console.log(a);

}
test()
console.log("Outer");

console.log(a);


/**
 * Hoisting : 
 * NOTE :  Only works with var
 */
b = 10;
console.log(b);
var b;

// Function hoisteing
// NOTE: Works with function declaration only not with expression
hoisted()
function hoisted() {
    console.log("Hello");
}
hoistedEx();// Will five is not a function error
// var hoistedEx = function () {
//     console.log('hi')
// } 