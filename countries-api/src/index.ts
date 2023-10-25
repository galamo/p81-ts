// api
// const { calcTax } = require("./lib"); // commonJs
import { calcTax } from "./lib";
import { calcTax as calcTaxNew } from "./libNew";
import { getStats } from "./utils";
console.log("Api is running...");

console.log(calcTax(3));
console.log(calcTaxNew(55));
console.log(getStats(["asdsf", "sdafas"]));
