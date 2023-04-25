import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
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
let itemList = document.querySelector(".item-list");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let filledForm;
    if (type.value === "Payment") {
        filledForm = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        filledForm = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    let createdList = new ListTemplate(itemList);
    createdList.render(filledForm, type.value, 'end');
    console.log("filledForm", filledForm);
});
