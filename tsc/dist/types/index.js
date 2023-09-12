"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productName = "Perimeter81";
var cost = 100000;
var usefull = true;
var licenseFrom = new Date();
var licenseTo = new Date().toISOString();
var temp;
var myNallabaleItem;
console.log("The product is: ".concat(productName, " it will cost : ").concat(cost, ", \n  available from: ").concat(licenseFrom, " to: ").concat(licenseTo, " is the product valuable ? ").concat(usefull, " "));
var business = "security";
console.log(business);
var products = ["P1", "P2", "P3"];
var result = products.map(function (item) {
    return { name: item, type: "product" };
});
console.log(result);
// const salaries = [100, 222, 3300, 4400];
// const highSalaries = salaries.reduce((sal: any, currentSalary: any) => {
//   if (currentSalary > 100) {
//     return sal + currentSalary;
//   } else return sal;
// }, 0);
// highSalaries.toLowerCase();
// console.log(highSalaries);
// never
function doSomething() { }
exports.default = doSomething;
