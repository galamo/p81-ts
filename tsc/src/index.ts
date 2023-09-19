import doSomething from "./types";
import functions from "./functions";
import init from "./arrays";
init();
functions();
doSomething();
const user: string = "galamouyal88@gmail.com";
const age: number = 34;
console.log(user, age);
// console.log(age.toLweCase());

type T0 = Exclude<{ a: number; y: string } | { b: number }, { b: number }>;
const tt: T0 = { y: "sss", a: 1, b: 1 };
