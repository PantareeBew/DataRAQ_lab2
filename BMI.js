//Create BMI Class
class BMI {
    //take two arguments
    constructor(height, weight) {
        //local instance
        this.height = height;
        this.weight = weight;
    }

    //method to calculate bmi
    CalculateBMI() {
        //calculation
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}//end class

//variables
let MyBmi = new BMI(2, 90);
let calculatedBMI = MyBmi.CalculateBMI();
console.log(calculatedBMI);