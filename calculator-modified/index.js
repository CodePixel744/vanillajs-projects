/*took help from ai for full loading issue and also for eval function and some repititve tasks */
document.addEventListener("DOMContentLoaded", function () {
    let one = document.getElementById("one")
    let two = document.getElementById("two")
    let three = document.getElementById("three")
    let four = document.getElementById("four")
    let five = document.getElementById("five")
    let six = document.getElementById("six")
    let seven = document.getElementById("seven")
    let eight = document.getElementById("eight")
    let nine = document.getElementById("nine")
    let zero = document.getElementById("zero")
    let plus = document.getElementById("plus")
    let minus = document.getElementById("minus")
    let mult = document.getElementById("mult")
    let div = document.getElementById("div")
    let equals = document.getElementById("equals")
    let inputSelected = document.getElementById("input")
    let clear = document.getElementById("clear")
    console.log(one)
    console.log(inputSelected)
    console.log(clear)
    function appendTodisplay(value) {
        /*this is like we are adding some characters in empty string */
        /* in that we take empty string str="" then str+=element.value */
        document.getElementById("input").value += value;
    }
    plus.addEventListener("click", function () {
        appendTodisplay("+");
    })
    minus.addEventListener("click", function () {
        appendTodisplay("-");
    })
    mult.addEventListener("click", function () {
        appendTodisplay("*");
    })
    div.addEventListener("click", function () {
        appendTodisplay("/");
    })
    equals.addEventListener("click", function () {
        try {
            let inputElement = document.getElementById("input");
            let inputContains = inputElement.value;
            console.log(inputContains)
            let result = eval(inputContains)
            console.log(result)
            inputElement.value = result;

        }
        catch (error) {
            console.log(error);
        }
    })
    one.addEventListener("click", function () {
        appendTodisplay("1");
    })
    two.addEventListener("click", function () {
        appendTodisplay("2");
    })
    three.addEventListener("click", function () {
        appendTodisplay("3");
    })
    four.addEventListener("click", function () {
        appendTodisplay("4");
    })
    five.addEventListener("click", function () {
        appendTodisplay("5");
    })
    six.addEventListener("click", function () {
        appendTodisplay("6");
    })
    seven.addEventListener("click", function () {
        appendTodisplay("7");
    })
    eight.addEventListener("click", function () {
        appendTodisplay("8");
    })
    nine.addEventListener("click", function () {
        appendTodisplay("9");
    })
    zero.addEventListener("click", function () {
        appendTodisplay("0")
    })
    /*adding funcitonality for clear */
    clear.addEventListener("click", function () {
        let inputElement = document.getElementById("input");
        inputElement.value = ""
    })

})
