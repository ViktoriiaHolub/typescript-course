// interfaces

interface IPerson {
  name: string;
  age: number;
  speak: (text: string) => void;
  spend: (count: number) => number;
}

const me: IPerson = {
  name: "Vika",
  age: 27,
  speak(text: string): void {
    console.log(text);
  },
  spend(count: number): number {
    console.log(count);
    return count;
  },
};

const greetPerson = (person: IPerson) => {
  console.log("hello,", person.name);
};

greetPerson(me);
