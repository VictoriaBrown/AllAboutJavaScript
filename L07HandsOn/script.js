function checkNameFormat(firstName, lastName) {
  firstName = document.getElementById('firstName').value;
  lastName = document.getElementById('lastName').value;
  let firstNameRegex = /^[A-Z][a-z]+$/
  let lastNameRegex = /^[A-Z][a-z]+$/
  if (firstName.match(firstNameRegex)) {
    if (lastName.match(lastNameRegex)) {
      alert("Valid First and Last Name!");
    } else {
      alert("Valid First Name, Invalid Last Name");
    }
  } else {
    alert("Invalid First Name");
  }
}
