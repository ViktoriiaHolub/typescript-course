"use strict";
let greet;
// greet = 'hello'
greet = () => {
    console.log("hello");
};
const sum = (a, b, c = 10, d) => {
    console.log(a + b + c);
    console.log(d);
};
sum(10, 23, 4);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 4);
result = 5;
// result = 'hello' // Error
