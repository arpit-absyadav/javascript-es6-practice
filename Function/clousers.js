/**
 * Closure is a locally declared variable related to a function
 * which stays in memory when the function has returned.
 */

//  eg:
function greet(message) {
    console.log(message);
}
function greeter(name, age) {
    return name + " says howdy!! He is " + age + " years old";
}
// generate the message
var message = greeter('Arpit', 24);
// Pass it to greet
greet(message)


// 
// Simplified by clousers
// 
function greeter1(name, age) {
    var message = name + " says howdy!! She is " + age + " years old";
    return function greet() {
        console.log(message);
    }
}
var nailahGreeter = greeter1('Nailah', 24)
nailahGreeter()