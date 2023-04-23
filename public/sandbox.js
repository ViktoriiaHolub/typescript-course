"use strict";
// let greet: Function;
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says: ${greeting}`);
};
greet("Tom", "Hello");
// example 2
let calc;
calc = (numberOne, numberTwo, action) => {
    if (action === "add") {
        return numberOne + numberTwo;
    }
    else {
        return numberOne - numberTwo;
    }
};
calc(15, 10, "add");
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} has ${ninja.age} years old`);
};
logDetails({ name: "Tom", age: 29 });
