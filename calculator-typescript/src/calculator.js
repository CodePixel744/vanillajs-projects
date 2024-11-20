"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator(num1Element1, num2Element2, resultElement) {
        this.num1Element1 = num1Element1;
        this.num2Element2 = num2Element2;
        this.resultElement = resultElement;
    }
    Calculator.prototype.add = function () {
        var _a, _b;
        var num1 = Number((_a = this.num1Element1) === null || _a === void 0 ? void 0 : _a.textContent);
        var num2 = Number((_b = this.num2Element2) === null || _b === void 0 ? void 0 : _b.textContent);
        if (this.resultElement) {
            this.resultElement.textContent = String(num1 + num2);
        }
    };
    Calculator.prototype.sub = function () {
        var _a, _b;
        var num1 = Number((_a = this.num1Element1) === null || _a === void 0 ? void 0 : _a.textContent);
        var num2 = Number((_b = this.num2Element2) === null || _b === void 0 ? void 0 : _b.textContent);
        if (this.resultElement) {
            this.resultElement.textContent = String(num1 - num2);
        }
    };
    Calculator.prototype.mult = function () {
        var _a, _b;
        var num1 = Number((_a = this.num1Element1) === null || _a === void 0 ? void 0 : _a.textContent);
        var num2 = Number((_b = this.num2Element2) === null || _b === void 0 ? void 0 : _b.textContent);
        if (this.resultElement) {
            this.resultElement.textContent = String(num1 * num2);
        }
    };
    Calculator.prototype.divide = function () {
        var _a, _b;
        var num1 = Number((_a = this.num1Element1) === null || _a === void 0 ? void 0 : _a.textContent);
        var num2 = Number((_b = this.num2Element2) === null || _b === void 0 ? void 0 : _b.textContent);
        if (this.resultElement) {
            this.resultElement.textContent = String(num1 / num2);
        }
    };
    return Calculator;
}());
exports.Calculator = Calculator;
