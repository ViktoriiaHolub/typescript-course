"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.amount}`;
    }
}
const invOne = new Invoice("Mario", "working", 200);
const invTwo = new Invoice("Luigi", "working", 1000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = "Yoshi";
invTwo.amount = 400;
console.log(invOne, invTwo);
// DOM
const anchor = document.querySelector("a");
// if (anchor) {
//   console.log(anchor.href);
// }
console.log(anchor.href);
const form = document.querySelector(".new-item-form");
console.log(form.children);
// type of inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
