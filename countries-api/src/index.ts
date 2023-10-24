// api
// const { calcTax } = require("./lib"); // commonJs
// import { calcTax } from "./lib";
import { calcTax as calcTaxNew } from "./libNew";
import { testMe } from "./libNew";
console.log("Api is running...");

// console.log(calcTax(3));
console.log(calcTaxNew(55));
const result = await testMe();
