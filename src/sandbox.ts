let greet: Function;

// greet = 'hello'

greet = () => {
  console.log("hello");
};

const sum = (
  a: number,
  b: number,
  c: number = 10,
  d?: number | string
): void => {
  console.log(a + b + c);
  console.log(d);
};

sum(10, 23, 4);

const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(10, 4);
result = 5;
// result = 'hello' // Error
