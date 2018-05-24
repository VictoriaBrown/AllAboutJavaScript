// Arrow Functions - break down the amount of code needed for a function by using shorter syntax

// Regular Function:
function myFunction(param1, param2) {
  return param1 + param2;
}

myFunction(2, 4);

// Above function but using the Arrow Function
const addFunction = (param1, param2) => {
  return param1 + param2;
}

addFunction(2, 4);

// Because of implicit return, we don't actaully need to include the return keyword or the curly brackets
const addFunction = (param1, param2) => param1 + param2;

addFunction(2, 4);


// If you only have 1 parameter, the parenthesis isn't needed:
const stringFunction = string => string + '!';

stringFunction('My name is Hermoine');

// If you don't have any parameters, you can express arrow function with empty parenthesis:
const hello = () => console.log('Hello World!');

// ^^ is equal to:
function hello() {
  console.log("Hello World!");
}
