/**
 * The function .call() and .apply() are very similar in their usage except a little difference.
 * .call() is used when the number of the function's arguments are known to the programmer,
 * as they have to be mentioned as arguments in the call statement. On the other hand,
 * .apply() is used when the number is not known. The function .apply()
 * expects the argument to be an array.
 * The basic difference between .call() and .apply() is in the way arguments are passed to the function.
 * Their usage can be illustrated by the given example.
 */

let someObject = {
    myProp: 'Arpit',
    myMethod: function (prefix, postfix) {
        console.log(prefix + this.myProp + postfix);

    }
}
someObject.myMethod('<', '>');

let someOtherObject = {
    myProp: 'Yadav'
}
someObject.myMethod.call(someOtherObject, '<', '>');
someObject.myMethod.apply(someOtherObject, ['<', '>',])
