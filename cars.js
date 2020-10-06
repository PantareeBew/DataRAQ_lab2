//Class
class Vehicle {
    //take 3 arguments
    constructor(make, model, year) {
        //local variables
        this.make = make;
        this.model = model;
        this.year = year;
    }//end method

    //method
    Information() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}//end class

//inherit form vehicle class
class cars extends Vehicle {
    //take 4 arguments
    constructor(make, model, year, doors) {
        //call the constructors from parent class
        super(make, model, year);
         //local variables
        this.doors = doors;
    }//end method

    //meethod
    Information() {
        //invoke Information method in the parent class
        super.Information();
        console.log(`Doors ${this.doors}`);
    }//end method
}//end class

//variables
let myCars = new cars('VW', 'Gold', 2000, 5);
myCars.Information();