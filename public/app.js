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
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let filledForm;
    if (type.value === "Payment") {
        filledForm = new Payment(...values);
    }
    else {
        filledForm = new Invoice(...values);
    }
    let createdList = new ListTemplate(itemList);
    createdList.render(filledForm, type.value, "end");
    console.log("filledForm", filledForm);
});
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Book"] = 0] = "Book";
    ResourceType[ResourceType["Author"] = 1] = "Author";
    ResourceType[ResourceType["Publishing"] = 2] = "Publishing";
})(ResourceType || (ResourceType = {}));
const addUID = (obj) => {
    const uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
const docOne = addUID({ name: "Tom", age: 20 });
console.log(docOne);
docOne.name = "Bob";
const docTwo = {
    uid: 1,
    resourceName: ResourceType.Book,
    data: "file",
};
const docThree = {
    uid: 1,
    resourceName: ResourceType.Publishing,
    data: { format: "tsx", countOfPages: 318 },
};
console.log(docTwo, docThree);
// TUPLE
let tup = ["ryu", 25, true];
// tup[2] = 1 // Error
