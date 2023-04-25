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

  let values: [string, string, number];

  values = [toFrom.value, details.value, amount.valueAsNumber];

  let filledForm: HasFormatter;
  if (type.value === "Payment") {
    filledForm = new Payment(...values);
  } else {
    filledForm = new Invoice(...values);
  }

  let createdList = new ListTemplate(itemList);
  createdList.render(filledForm, type.value, "end");

  console.log("filledForm", filledForm);
});

// ENUMS
enum ResourceType {
  Book,
  Author,
  Publishing,
}

const addUID = <T>(obj: T) => {
  const uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

const docOne = addUID({ name: "Tom", age: 20 });
console.log(docOne);
docOne.name = "Bob";

interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

const docTwo: Resource<string> = {
  uid: 1,
  resourceName: ResourceType.Book,
  data: "file",
};
const docThree: Resource<object> = {
  uid: 1,
  resourceName: ResourceType.Publishing,
  data: { format: "tsx", countOfPages: 318 },
};

console.log(docTwo, docThree);

// TUPLE
let tup: [string, number, boolean] = ["ryu", 25, true];
// tup[2] = 1 // Error
