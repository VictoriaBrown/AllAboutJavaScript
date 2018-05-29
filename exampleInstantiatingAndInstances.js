
// Class Person
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    // Greeting Method
    greeting() {
        console.log(
            "Hello, my name is " + this.name + " and I am " + this.age + "."
        );
    }
}

// Instantiating 3 person objects
let andrew = new Person("Andrew", 30);
let mike = new Person("Mike", 24);
let frank = new Person("Frank", 29);

// Instances of the 3 above person objects
andrew.greeting();
mike.greeting();
frank.greeting();