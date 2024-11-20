import { Calculator } from "./calculator";
const num1: string | null = prompt("enter the first number:");
const num2: string | null = prompt("enter the second number");
const num1El: HTMLInputElement | null = document.getElementById("input-one") as HTMLInputElement | null;
const num2El: HTMLInputElement | null = document.getElementById("span-two") as HTMLInputElement | null;
if (num1El && num2El) {
    //if they exists then 
    num1El.textContent = num1;
    num2El.textContent = num2;
}
const calculator = new Calculator(
    document.getElementById("input-one") as HTMLInputElement | null,
    document.getElementById("input-two") as HTMLInputElement | null,
    document.getElementById("result-class") as HTMLInputElement | null
);

/*we have calculator object we can use it. */
document.getElementById("first-button")?.addEventListener("click", () => calculator.add())
document.getElementById("second-button")?.addEventListener("click", () => calculator.sub())
document.getElementById("third-button")?.addEventListener("click", () => calculator.mult())
document.getElementById("fourth-button")?.addEventListener("click", () => calculator.divide())