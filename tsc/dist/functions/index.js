"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function functions() {
    function printMyDetails(userName, email, working) {
        if (working === void 0) { working = true; }
        console.log("user: ".concat(userName, " , email: ").concat(email, " , working: ").concat(working));
    }
    printMyDetails("galamo", "galamouyal88@gmail.com", true);
    function getEmailFromUserName(userName) {
        return "".concat(userName, "@gmail.com");
    }
    console.log(getEmailFromUserName("galamo"));
    function makeAnError() {
        throw Error("This is input validation error");
    }
    function gameForLoop() {
        while (true) { }
    }
    function add(a, b) {
        if (typeof a !== "number")
            return;
        return a + b;
    }
    var addFunction = function (number1, b) {
        return number1 + b;
    };
    function printProduct(product) {
        console.log("pName ".concat(product.pName, " pCost: ").concat(product.pCost, " "));
    }
    printProduct({ pName: "p81", pCost: 90000 });
    var msProduct = {
        pName: "MsProtection",
        pCost: 90000,
        isValid: 1,
    };
    printProduct(msProduct);
}
exports.default = functions;
