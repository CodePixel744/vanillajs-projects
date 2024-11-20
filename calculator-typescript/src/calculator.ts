export class Calculator {
    constructor(private num1Element1: HTMLInputElement | null,
        private num2Element2: HTMLInputElement | null,
        private resultElement: HTMLInputElement | null
    ) { }

    add(): void {
        const num1 = Number(this.num1Element1?.value);
        const num2 = Number(this.num2Element2?.value);
        if (this.resultElement) {
            this.resultElement.value = String(num1 + num2);
        }
    }
    sub(): void {
        const num1 = Number(this.num1Element1?.value);
        const num2 = Number(this.num2Element2?.value);
        if (this.resultElement) {
            this.resultElement.value = String(num1 - num2);
        }
    }
    mult(): void {
        const num1 = Number(this.num1Element1?.value);
        const num2 = Number(this.num2Element2?.value);
        if (this.resultElement) {
            this.resultElement.value = String(num1 * num2);
        }
    }
    divide(): void {
        const num1 = Number(this.num1Element1?.value);
        const num2 = Number(this.num2Element2?.value);
        if (this.resultElement) {
            this.resultElement.value = String(num1 / num2);
        }
    }
}