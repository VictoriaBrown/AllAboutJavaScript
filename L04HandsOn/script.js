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

class Manager extends Employee {
    constructor(name, salary, hireDate, degree) {
        super(name, salary, hireDate);
        this.degree = degree;
    }
    jobDescription() {
        console.log("Manager others.");
    }
    degreeCompleted() {
        console.log(this.degree);
    }
}

class Designer extends Employee {
    constructor(name, salary, hireDate, degree) {
        super(name, salary, hireDate);
        this.degree = degree;
    }
    jobDescription() {
        console.log("Design things.");
    }
    degreeCompleted() {
        console.log(this.degree);
    }
}

class SalesAssociate extends Employee {
    constructor(name, salary, hireDate, degree) {
        super(name, salary, hireDate);
        this.degree = degree;
    }
    jobDescription() {
        console.log("Sell things.");
    }
    degreeCompleted() {
        console.log(this.degree);
    }
}