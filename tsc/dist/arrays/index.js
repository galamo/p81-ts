"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function init() { }
exports.default = init;
var number = [];
var ages = [];
var points = [];
points.push({ x: 1, y: 22 });
// TS Error
// points.push({ x: 1, locationY: 22 });
var combinedArray = [];
combinedArray.push(1);
combinedArray.push("1");
combinedArray.push(true);
var gameBoard = [[[1]]];
function getLocation(loc) {
    var x = loc[0], y = loc[1];
    return { x: x, y: y };
}
function getApiData(url) {
    // async operation
    return { id: "a", userName: "galamo" };
}
function calculateTax(_a) {
    var tax = _a.tax, price = _a.price;
    if (typeof price === "string") {
        return Number(price.replace("$", "")) * tax;
    }
    return price * tax;
}
console.log("new price is: ".concat(calculateTax({ price: "40$", tax: 2 })));
console.log("new price is: ".concat(calculateTax({ price: 40, tax: 2 })));
function getDayFromDate(date) {
    if (date.getDay() === 1)
        return "Monday";
    // more logic...
    return "Sunday";
}
var stuff = [];
stuff = ["aaa", "bbb", "cccc"];
stuff = [1, 2, 3, 4];
var countries = getCountriesFromServer("countriesApi");
function getCountriesFromServer(url) {
    return ["ISR", "BLR"];
}
