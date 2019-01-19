// Accessing by value or by reference
// In JavaScript, a variable may store two types of data: primitive and reference.JavaScript provides six primitive types as undefined, null, boolean, number, string, and symbol, and a reference type object.

// When you assign a variable a value, the JavaScript engine must determine whether the value is a primitive or a reference value.

// If the variable stores a primitive value, when you manipulate its value, you are working on the actual value stored in the variable.In other words, the variable that stores a primitive value is accessed by value.

// Unlike the primitive value, when you manipulate an object, you are working on the reference to that object, rather than the actual object.In short, a variable that stores an object is accessed by reference.

// Copying primitive values
// When you assign a variable that stores a primitive value to another, the value stored in the variable is created and copied into the new variable.

// Let’s take a look at the following example.

// First, declare a variable a and initialize its value to 10.


var a = 10;
// JavaScript Primitive Value Example

// Second, declare another variable b and assign it a value of the variable a.Internally, JavaScript engine copies the value stored in a into the location of b.


var b = a;
// JavaScript Primitive Value Copying

// Third, assign the variable a new value 10.

// JavaScript Primitive Value Assigning

// Because a and b have no relationship, therefore when you change the value stored in the b variable,
// the value of the a variable remains intact.


console.log(a); // 10;
console.log(b); // 20;
// Copying reference values
// When you assign a reference value from one variable to another, 
// the value stored in the variable is also copied into the location of the new variable.
// The difference is that the values stored in both variables now are the address of the actual object 
// stored in the heap.As the result, both variables are pointing to the same object.

// Here is an example.

// First, declare a variable x that holds an object whose name property is 'John'.


var x = { name: 'John' };
// JavaScript Reference Declaration

// Second, declare another variable y and assign the x variable to y.both x and y are now pointing to 
// the same object in the heap.


var y = x;
// JavaScript Reference Assignment

// Third, modify the value stored in the name property of the object using the y variable.


y.name = 'David';
// JavaScript Reference Modifying Property

// Because both x and y are pointing to the same object, therefore the change is also reflected
// if you access the object using the x variable.


console.log(x.name); // 'David'


// JavaScript Reference Accessing Property

// In this tutorial, you have learned about accessing by value and by reference,
// and also the differences between them.