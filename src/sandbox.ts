// let greet: Function;

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says: ${greeting}`);
};

greet("Tom", "Hello");

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numberOne: number, numberTwo: number, action: string) => {
  if (action === "add") {
    return numberOne + numberTwo;
  } else {
    return numberOne - numberTwo;
  }
};

calc(15, 10, "add");

// example 3
type person = { name: string; age: number };
let logDetails: (obj: person) => void;

logDetails = (ninja: person) => {
  console.log(`${ninja.name} has ${ninja.age} years old`);
};

logDetails({ name: "Tom", age: 29 });
