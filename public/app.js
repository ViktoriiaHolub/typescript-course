"use strict";
// classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("Mario", "working", 200);
const invTwo = new Invoice("Luigi", "working", 1000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invOne.client = "Yoshi"; // Error
invTwo.amount = 400;
// invTwo.details = 'resting' // Error
console.log(invOne, invTwo);
invoices.forEach((invoice) => {
    console.log(`${invoice.client} currently has ${invoice.amount}. ${invoice.format()}`);
});
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
