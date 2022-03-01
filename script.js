// the first object example

// window.color = "blue";


// let whiteRabbit = {};
// whiteRabbit.color = "white";
// whiteRabbit.name = "Nervous guy";
// // whiteRabbit.changeColor = () => this.color = "red";
// whiteRabbit.changeColor = function () {
//     return this.color = "red";
// }
// whiteRabbit.speak = function (line) {
//     console.log(`The ${this.color} rabbit says "${line}. His name is ${this.name}"`);
//     this.changeColor();
// };
// console.log("The global color (attempt 1) is : ", window.color);
// whiteRabbit.speak("I'm late!");
// console.log("The global color (attempt 2) is : ", window.color);
// whiteRabbit.speak("I'm late!");
// console.log("The global color (attempt 3) is : ", window.color);

// the second object example

// let a = [1, 2, 3, 4, 5];
// let b = { color: "white" };
// let c = new Object();
// c.color = "blue";

// console.log("Array toString invoked " + a);
// console.log("Object toString invoked ", b);

// console.log(Object.getPrototypeOf(a) === Array.prototype);
// console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));

// the third object example

// function Animal(type) {
//     this.animalType = type;
// }
// // Animal.animalType = "lion";
// Animal.prototype.toString = function () {
//     return "This animal is a " + this.animalType;
// }
// let fluffyRabbit = new Animal("Rabbit");
// console.log(fluffyRabbit + "");
// let feriociousFrog = new Animal("Frog");
// console.log(feriociousFrog + "");

// the fourth object example
// class Animal {
//     // animalType; // property belonging to the class
//     constructor(type) {
//         this.animalType = type;
//         this.color = "blue";
//     }
//     toString() {
//         return "This animal is a " + this.animalType;
//     }
// }

// let rabbit = new Animal("Rabbit");
// let rabbitString = `The animal says: ${rabbit}`;
// // note: console.log doesn't invoke toString
// console.log(rabbit);
// console.log(rabbitString);

// the fifth object example

class Temperature {
    // celsius;
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(newTemp) {
        this.celsius = parseFloat(((newTemp - 32) / 1.8).toFixed(2));
    }
    somestring() {
        return "something";
    }
}
let temper = new Temperature(12);
console.log(temper.fahrenheit);
temper.fahrenheit = 80;
console.log(temper.celsius);

// check if the property belongs to the instance of the Temperature
console.log('celsius' in temper);
// you can also use the new keyword before the class definition name
console.log('celsius' in new Temperature);

// the sixth object example

const classroom = {
    size: 20,
    year: 2,
    room: '248'
};
console.log(classroom.size, " ", classroom["size"]);
for (const property in classroom) {
    console.log(`Property name: ${property}`);
    console.log(`Property value: ${classroom[property]}`);
}