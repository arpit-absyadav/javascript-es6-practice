/**
 * Stacks:  A data sctructure which works with first in last out (FILO)
 * Functions:
 *  Push: Push the elemnt.
 *  Pop : Pop the element
 *  Peek: Find out the top most element.
 *  Length: Find out the length of the stack.
 *
 */

/**
 * Example : Lets find that the given word is paliendrome (reverse order will be same) or not.
 *
 */

let letters = []; // This is stack.
let word = 'racecarw';
var reverseWord = '';

// putting letters of word into stack.
console.time('Loop');

for (const char of word) {
  //   console.log(char);

  letters.push(char);
}
console.timeEnd('Loop');

console.log(letters.length);

// Pop all character and store in rword
for (let i = 0; i < word.length; i++) {
  //   console.log(char);
  reverseWord += letters.pop();
}

if (word === reverseWord) {
  console.log(reverseWord, ' is a palindrome');
} else {
  console.log(reverseWord, ' is not a palindrome');
}
// console.log(reverseWord);
