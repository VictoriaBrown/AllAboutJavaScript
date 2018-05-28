class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    run () {
        console.log(this.firstName + " " + this.lastName + " is running.");
    }
    walk () {
        console.log(this.firstName + " " + this.lastName + " is walking.");
    }
    greeting () {
        console.log("Hello, my name is " + this.firstName + ".");
    }
}

let rose = new Person("Rose", "Dawson");
rose.run();
rose.walk();
rose.greeting();