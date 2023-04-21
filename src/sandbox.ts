type Uid = string | number;
type objWithName = { name: string; uid: Uid };

const logDetails = (uid: Uid, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greeting = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

const leaving = (user: objWithName) => {
  console.log(`${user.name} says bye`);
};
