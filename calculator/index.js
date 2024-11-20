
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
    let num3 = document.getElementById("first-input").value;
    let num4 = document.getElementById("second-input").value;
    let num1 = parseFloat(num3);
    let num2 = parseFloat(num4);
    if (isNaN(num1) || isNaN(num2)) {
        return `please enter valid number.`
    }
    return num1 + num2
}
function sub() {
    let num3 = document.getElementById("first-input").value;
    let num4 = document.getElementById("second-input").value;
    let num1 = parseFloat(num3);
    let num2 = parseFloat(num4);
    if (isNaN(num1) || isNaN(num2)) {
        return `please enter valid number.`
    }
    return num1 - num2
}
function div() {
    let num3 = document.getElementById("first-input").value;
    let num4 = document.getElementById("second-input").value;
    let num1 = parseFloat(num3);
    let num2 = parseFloat(num4);
    if (isNaN(num1) || isNaN(num2)) {
        return `please enter valid number.`
    }
    if (num2 === 0) {
        return `error you can't divide by zero.`
    }
    return num1 / num2
}
function mult() {
    let num3 = document.getElementById("first-input").value;
    let num4 = document.getElementById("second-input").value;
    let num1 = parseFloat(num3);
    let num2 = parseFloat(num4);
    if (isNaN(num1) || isNaN(num2)) {
        return `please enter valid number.`
    }
    return num1 * num2
}
function display(cases) {
    switch (cases) {
        case 'add':
            result.innerText = `Addition is ${add()}`
            break;
        case 'sub':
            result.innerText = `Subtraction is ${sub()}`
            break;
        case 'mult':
            result.innerText = `Multiplication is ${mult()}`
            break;
        case 'div':
            result.innerText = `Division is ${div()}`
            break;
        default:
            result.innerText = `the operation is not available`
            break;
    }
}
addbtn.onclick = () => display('add')
subbtn.onclick = () => display('sub')
multbtn.onclick = () => display('mult')
divbtn.onclick = () => display('div')
// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


