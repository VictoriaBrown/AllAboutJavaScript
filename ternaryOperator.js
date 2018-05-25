// Ternary Opertator - just shorthand for the if...else statement
// Syntax : condition ? expressionOnTrue : expressionOnFalse ;

// Here's a program that checks age and prints out according messages for 18 or older or younger
// This is the ternary operator version
let age = 17;
const isOldEnough = age >= 18 ? 'Welcome to our site.' : 'Sorry; you must be 18 or older to enter.';
console.log(isOldEnough)

// Here is the same thing but with the traditional if...else statements
age = 17;
if (age >= 18) {
  console.log('Welcome to our site.');
} else {
  console.log('Sorry; you must be 18 or older to enter.');
}
