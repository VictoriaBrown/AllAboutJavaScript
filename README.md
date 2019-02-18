# AllAboutJavaScript
This repo is home to all of my completed/WIP exercises and projects that are JS. You can scroll through this ReadMe for more information about this repository. If you're looking for more information about a particular folder/file, please use Ctrl+F to find the title of the Folder/File and you can easily find more information that way.

## L02HandsOn
This was an assignment completed for college. Within this folder, you'll find an index.html page and a script.js file. Within the JS file, you'll find an object named idealCar with the following properties: name property, color property, weightInPounds property, and a method myCar that takes values and adds them together and outputs them as a console.log(). The HTML document calls this method.

## L03HandsOn
This was an assignment completed for college. Within this folder, you'll find an index.html page and a script.js file. Within the JS file, you'll find a switch..case statement that checks highSchoolGrade and sets the grade according to the correct term. (For example 9=Freshman and 12=Senior). The default case sets grade to Invalid. Part 2 of this assignment was to change the following if..else to a ternary.

```javascript
function name() {
     if (firstName === "John") {  
          document.getElementById("demo").innerHTML = "Hello John!";  
     }  
     else {  
          document.getElementById("demo").innerHTML = "Hello Human!";  
     }  
}
```

## L04HandsOn
This was an assignment completed for college. Within this folder, you'll find an script.js page. Within the JS file, you'll find a Parent class. This was given from the assignment. I was instructed to create 3 sub-classes that inherit from the parent Employee class. The three new subclasses that I created were Manager, Designer, and SalesAssociate. The methods I created were: jobDescription(), yearsExperience(), and degreeCompleted(). Below is the code that I started with. Everything else in the file was done by me.

```javascript
class Employee {
  constructor(name, salary, hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate;
  }
  getName() {
    console.log(this.name.toUpperCase());
  }
  getSalary() {
    console.log(this.salary);
  }
  getHireDate() {
    console.log(this.hireDate);
  }
}
```

## L06HandsOn
This was an assignment completed for college. You will find a project that includes the following: 
* Nav bar
     * 4 nav tabs/pills
     * 1 drop-down menu
     * Search box that includes glyphicon
* Form
     * First Name
     * Last Name
     * Phone Number
     * Email
* Table
     * Border
     * Hoverable rows
     * 3 columns, 4 rows
* 3 Bootstrap buttons with each a different color

The page is styled with CSS, and using Bootstrap Grid Layout for the design.

## React1
This is a simple app using React and ReactDOM. Output the following elements using React:
* h1 element
* h1 element nested inside of a div
* h1 element with className being passed in props
* anchor element with href being passed in props
* unordered list with 3 list elements
* nested unordered list without using variables
* nested unordered list using variables

Please see index.html and index.js for source code.

## React2
Write the React code needed to render the equivalent to the below HTML favorite things list. Make sure to fulfill the below requirements:
Create unordered list that contains the following:
* Favorite Colors
     1. Favorite Color 1
     2. Favorite Color 2
     3. Favorite Color 3
* Favorite Music
     1. Favorite Artist 1
     2. Favorite Artist 2
     3. Favorite Artist 3
* Favorite Food
     1. Favorite Food Item 1
     2. Favorite Food Item 2
     3. Favorite Food Item 3
* Favorite Websites
     1. Favorite Website URL 1
     2. Favorite Website URL 2
     3. Favorite Website URL 3
     
Please see index.html and index.js for source code.

## React3
This file explores our JSX options with React. It goes through creating unordered lists, nested unordered lists, and creating variables with HTML to enter into our render method.

Please see index.js for source code.

## React4
Completed the following requirements for this assignment: 
Write the following table using JSX:

State	Population	Capital
Idaho	1.683 million	Boise
Tennessee	6.651 million	Nashville
Maine	1.331 million	Agusta
Wisconsin	5.779 million	Madison

It must also have the following:
1. Use a function.
2. Minimum of 3 parameters used
3. Use curly braces

## React 5
The file showcases the following functionality:
* GroceryList component - takes in 3 props: item1, item2, item3 and places them in an unordered list
* Hello component - takes in 1 prop: name and places it in a h1 element nested in a div
* Employee component - takes in 2-3 props: name, age, position and places that information inside of an unordered list. There are Prop Types set up for each of these props. name: string and required, age: number and required, position: string. The position has a Default Prop of employee.
* User component - takes in 9 props: name, address, city, state, zip, items, paid, amount, and shipped. Places that information into a nested unordered list. There are Prop Types set up for each of these props. name: string and required, address: string and requierd, city: string and required, state: string and required, zip: number and required, items: string and required, paid: bool, amount: number and required, shipped: bool. The paid and shipped have Default Props of false.
* List component - takes in 1 prop: items. The items is a 2D array with name and price values. In the component itself, it uses map() to loop through the 2D array and place each item name and price in an unordered list. 
