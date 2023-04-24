"use strict";
// interfaces
const me = {
    name: "Vika",
    age: 27,
    speak(text) {
        console.log(text);
    },
    spend(count) {
        console.log(count);
        return count;
    },
};
const greetPerson = (person) => {
    console.log("hello,", person.name);
};
greetPerson(me);
