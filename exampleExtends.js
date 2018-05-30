class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        console.log("Hello, my name is " + this.firstName + ".");
    }
}

class NewStudent extends Person {
    constructor(studentID, firstName, lastName) {
        super(firstName, lastName);
        this.studentID = studentID;
    }
    studentInfo() {
        console.log(this.studentID + " " + this.firstName + " " + this.lastName);
    }
}

let student = newStudent(12, "John", "Smith");
student.greeting()
student.studentInfo();