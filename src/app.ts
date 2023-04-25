import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const invOne = new Invoice("Mario", "working", 200);
const invTwo = new Invoice("Luigi", "working", 1000);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
// invOne.client = "Yoshi"; // Error
invTwo.amount = 400;
// invTwo.details = 'resting' // Error

console.log(invOne, invTwo);

invoices.forEach((invoice) => {
  console.log(
    `${invoice.client} currently has ${invoice.amount}. ${invoice.format()}`
  );
});

// DOM
const anchor = document.querySelector("a")!;

// if (anchor) {
//   console.log(anchor.href);
// }

console.log(anchor.href);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// type of inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

let itemList = document.querySelector(".item-list")! as HTMLUListElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let filledForm: HasFormatter;
  if (type.value === "Payment") {
    filledForm = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    filledForm = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  }

  let createdList = new ListTemplate(itemList)  
  createdList.render(filledForm, type.value, 'end');

  console.log("filledForm", filledForm);

});
