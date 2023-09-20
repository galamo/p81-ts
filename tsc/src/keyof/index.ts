interface SuperPerson {
  name: string;
  age: number;
}

function printSuperPerson1(user: SuperPerson, property: keyof SuperPerson) {
  console.log(`the requested property value ${property} is ${user[property]}`);
}
const person: SuperPerson = { name: "Veronica", age: 20 };
printSuperPerson1(person, "name");

function getProperty<T, Prop extends keyof T>(obj: T, property: Prop): T[Prop] {
  return obj[property];
}

// getProperty(person, "engineSize"); THIS ONE WILL NOT WORK

enum EngineSizes {
  SMALL = 1,
  MED = 2,
  LARGE = 3,
}

interface Car {
  engineSize: EngineSizes;
  lp: string;
  model: string;
}

const car: Car = {
  lp: "abc1234",
  engineSize: EngineSizes.LARGE,
  model: "Tesla",
};

const result = getProperty(car, "lp");

type Size = keyof typeof EngineSizes;

type Attributes = {
  [key: string]: number | string;
};

function getNewAttribute<T extends Attributes>(obj: T, prop: keyof Attributes) {
  if (typeof obj[prop] === "string") {
    return "Its a string response";
  } else {
    return 1;
  }
}

// key of example with countries
