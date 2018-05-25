// try...catch - use this to catch errors
// The try...catch works like this:
// The code in try {...} is executed first
// If there are no errors, than catch(err) is ignored
// If error does occur, try is stopped and control goes to catch(err). The err variable contains an error object with details about what happened

// This is the syntax for try...catch
try {
  // code block goes here
} catch (err) {
  // error handling
}

// Let's look at an example of errorless code
try {
  alert('Start of try block'); // #1 This line runs first

  // No errors occurred so we move on to number #2

  alert('End of try block'); // #2 This line runs next
} catch (err) {
  alert('Catch is ignored because there are no errors'); // #3 This line is ignored due to there being no errors
}

alert('...Then the execution continues'); // #4 This alert is executed



// Now let's look at an example that contains an error
try {
  alert('Start of try block'); // #1 This line runs first

  randomVariable; // error, variable is not defined!

  alert('End of try block'); // #2 This line is never reached
} catch (err) {
  alert('Catch is ignored because there are no errors'); // #3 This line is executed since an error has occurred
}

alert('...Then the execution continues'); // #4 This alert is executed
