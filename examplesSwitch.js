// Switch statement is flow-control - meant to replace the super long and complicated if...else chained statements
// Check out the following examples for a better understanding


// This declares day to represent a day in a week in between numbers 1-7
// The switch statement takes in the variable day as an expression to check against
// Each case statement has a value between 1-7 and sets the variable dayName to corresponding name
let day = 4;
let dayName;
switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}
console.log(dayName);
// Because day = 4, the dayName will be set to Wednesday


// For the following, based on what grade you're in, switch statement will tell you which
// level of school you're in.
let grade = 7;
let school;

switch (grade) {
  case 1:
    school = 'Elementary School';
    break;
  case 2:
    school = 'Elementary School';
    break;
  case 3:
    school = 'Elementary School';
    break;
  case 4:
    school = 'Elementary School';
    break;
  case 5:
    school = 'Elementary School';
    break;
  case 6:
    school = 'Middle School';
    break;
  case 7:
    school = 'Middle School';
    break;
  case 8:
    school = 'Middle School';
    break;
  case 9:
    school = 'High School';
    break;
  case 10:
    school = 'High School';
    break;
  case 11:
    school = 'High School';
    break;
  case 12:
    school = 'High School';
    break;
  default:
    school = 'Invalid Entry';
}

console.log(school);



// Below we are using getDay() metod which returns a week day between 0-6 
// The new Date().getDay() retrieves the current day and then defines the corresponding day number between 0-6
// We're checking to see if today's current date is a Weekend or a Weekday
let text;
switch (new Date().getDay()) {
  case 6:
    text = 'Today is Saturday';
    break;
  case 0:
    text = 'Today is Sunday';
    break;
  default:
    text = 'Darn, its a weekday. Looking forward to the Weekend!';
}

console.log(text);
