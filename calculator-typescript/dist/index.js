var _a, _b, _c, _d;
import { Calculator } from "./calculator";
var num1 = prompt("enter the first number:");
var num2 = prompt("enter the second number");
var num1El = document.getElementById("span-one");
var num2El = document.getElementById("span-two");
if (num1El && num2El) {
    //if they exists then 
    num1El.textContent = num1;
    num2El.textContent = num2;
}
var calculator = new Calculator(document.getElementById("span-one"), document.getElementById("span-two"), document.getElementById("result-class"));
/*we have calculator object we can use it. */
(_a = document.getElementById("first-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { return calculator.add(); });
(_b = document.getElementById("second-button")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return calculator.sub(); });
(_c = document.getElementById("third-button")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return calculator.mult(); });
(_d = document.getElementById("fourth-button")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () { return calculator.divide(); });
