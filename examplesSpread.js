let midArray = [12, 13];
let normArray = [1, 2, 3, 4, 5];

// Let's say that we want to add the values of midArray into normArray.
// We could try something like the following:
normArray = [1, 2, 3, midArray, 4, 5];

// If you console.log the normArray it would be [1, 2, 3, [12, 13], 4, 5];
// That's clearly not what we want - we want [1, 2, 3, 12, 13, 4, 5];
// The spread operator (...) allows elements of our array to expand.
normArray = [1, 2, 3, ...midArray, 4, 5];

// Now when we console.log normArray we get [1, 2, 3, 12, 13, 4, 5]; !!



// Now let's see about taking the values of 2 arrays and adding them into a 3rd.
let arr1 = ['a', 'b', 'c', 'd'];
let arr2 = ['e', 'f', 'g', 'h'];

let arr3 = [...arr1, ...arr2];
console.log(arr3);
// console.log output is: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


// How about spreading objects?
let obj1 = {name: 'John', age: 29};
let obj2 = {name: 'Alice', email: 'alice@email.com'};

let mergeObj = {...obj1, ...obj2};

console.log(mergeObj);
// Output: {name: 'Alice', age: 29, email: 'alice@email.com'};
// When spreading, it will overwrite any duplicate properties (like the two name properties)
