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

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
