let boolVal = false;
function start() {
    let button = document.getElementById("toggle");
    button.addEventListener('click', () => darkMode());
    // setInterval(() => darkMode(), 500);
    function darkMode() {
        if (!boolVal) {
            console.log(`the value of boolVal is ${boolVal}`);
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            boolVal = true;
        }
        else if (boolVal) {
            console.log(`the value of boolVal is ${boolVal}`);
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            boolVal = false;
        }
    }
}

start();


