/**
 * 
 * Calculating Fibonacci series in JavaScript
 * Fibonacci numbers are a sequence of numbers where each value is the sum of the previous two, 
 * starting with 0 and 1. The first few values are 0, 1, 1, 2, 3, 5, 8, 13 ,…,
 */
function fib(n) {
    let a = 0, b = 1
    for (let i = 0; i < n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
        console.log(a, '+');

    }
    return a;
}
console.log('=', fib(10));
