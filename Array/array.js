/**
 * Appending value to array.
 */
let a = [1, 2, 3, 4, 5]
console.log(a);
a[a.length] = 6
console.log(a);

/**
 * unshift: This method is functional at the starting of the array, unlike the push().
 * It adds the desired number of elements to the top of an array.
 */
let name = ['Arpit'];
name.unshift("Yadav")
name.unshift("Nailah")
name.unshift("Qureshi") // same like push()
console.log(name);
name.shift() // Will remove 'nailah' Same llike pop() 
console.log(name);

/**
 * One Dimentional
 */
var myArr = new Array();
myArr[0] = "Hi";
myArr[1] = "there";
myArr[2] = "dude";

console.log(myArr[2]);

/**
 * Two Dimentional
 */
var myArr = new Array();
myArr[0] = new Array("Val", "Va");
myArr[1] = new Array("Val", "yo");
myArr[2] = new Array("Val", "Val");

console.log(myArr[1]); // Alerts 'val, yo'
console.log(myArr[1][0]); // Alerts 'val'

/**
 * Three dimensniol array
 */
let three = [[[]]] // declaration
var myArr = new Array();
myArr[0] = new Array();
myArr[0][0] = new Array()
myArr[0][0][0] = "Howdy";
myArr[0][0][1] = "pardner";

console.log(myArr[0][0][1]);
console.log(myArr[0][0][0]);


// testing
let arr = [1, 2, 3] // array litrals
console.log(arr instanceof Array);
var myArray = new Array(); // Instance of array
var myArray1 = new Array('value1', 'value2', 'valueN'); // cunstructor


/**
 * Empty an array
 */
// By assigning an empty array.

var arr1 = [1, 4, 5, 6];
arr1 = [];

// By assigning array length to 0.
var arr2 = [1, 4, 5, 6];
arr2.length = 0;

// By poping the elements of the array.
var arr2 = [1, 4, 5, 6];
while (arr2.length > 0) {
    arr2.pop();
}

// By using.splice().
var arr3 = [1, 4, 5, 6];
arr.splice(0, arr3.length)