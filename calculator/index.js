let num3 = prompt("enter the first number:");
let num4 = prompt("enter the second number");
let num1 = parseInt(num3);
let num2 = parseInt(num4);
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let addbtn = document.getElementById("add")
let subbtn = document.getElementById("sub")
let multbtn = document.getElementById("mult")
let divbtn = document.getElementById("div")
let result = document.getElementById("sum-el")
console.log(addbtn)
// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
function add() {
    return num1 + num2
}
function sub() {
    return num1 - num2
}
function div() {
    return num1 / num2
}
function mult() {
    return num1 * num2
}
function display(cases) {
    switch (cases) {
        case 'add':
            result.textContent = `Addition is ${add()}`
            break;
        case 'sub':
            result.textContent = `Subtraction is ${sub()}`
            break;
        case 'mult':
            result.textContent = `Multiplication is ${mult()}`
            break;
        case 'div':
            result.textContent = `Division is ${div()}`
            break;
        default:
            result.textContent = `the operation is not available`
            break;
    }
}
addbtn.onclick = () => display('add')
subbtn.onclick = () => display('sub')
multbtn.onclick = () => display('mult')
divbtn.onclick = () => display('div')
// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


