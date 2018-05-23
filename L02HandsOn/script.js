let idealCar = {
  name: 'mustang',
  color: 'red',
  weightInPounds: 3600,
  myCar: function() {
    console.log("My idea car is a " + this.name + " with a color of " + this.color + ", but I don't want it over " + this.weightInPounds + " pounds.");
  }
};

idealCar.myCar();
