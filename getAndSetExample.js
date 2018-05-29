class Car {
    constructor (make, model, year) {
        this._make = make;
        this._model = model;
        this._year = year;
    }

    get make() {
        return this._make;
    }

    set make(value) {
        const possibleMakes = ["Honda", "Toyota", "Nissan"];_

        if (possibleMakes.includes(value)) {
            this._make = value;
        } else {
            throw Error(value + " is not a valid make.");
        }
    }

    get description() {
        return this._year + " " + this._make + " " + this._model;
    }
}

let myCar = new Car("Nissan", "Rogue", 2017);
