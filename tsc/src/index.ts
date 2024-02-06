import doSomething from "./Example_1_Types";
import functions from "./Example_4_Functions";
import init from "./Example_3_arrays";
init();
functions();
doSomething();
const user: string = "galamouyal88@gmail.com";
const age: number = 34;
console.log(user, age);
// console.log(age.toLweCase());

type T0 = Exclude<{ a: number; y: string } | { b: number }, { b: number }>;
const tt: T0 = { y: "sss", a: 1, b: 1 };
