document.addEventListener('DOMContentLoaded', (event) => {
    let button = document.getElementById("button");
    button.addEventListener('click', runThis);
    let array = [];
    let dicebox = document.getElementsByClassName('dicebox')
    console.log(dicebox);
    let textValue = document.getElementsByClassName('text');
    function runThis() {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        /**always forgetting this TQ AI */
        textValue[0].textContent = `the value is ${randomNumber}`;
        array.push(randomNumber);
        createDivwithDots(array[0]);
        while (array.length != 0) {
            array.pop();
        }
    }
    function createDivwithDots(randomNumber) {
        let newDiv = document.createElement("div");
        console.log(newDiv);
        console.log(typeof (newDiv));
        newDiv.style.width = '100px';
        newDiv.style.height = '100px';
        newDiv.style.backgroundColor = "white";
        newDiv.style.border = '2px solid black';
        newDiv.style.borderRadius = '10px';
        newDiv.style.display = 'grid';
        newDiv.style.gridTemplateColumns = 'repeat(3, 1fr)';
        newDiv.style.gridTemplateRows = 'repeat(3, 1fr)';
        newDiv.style.gap = '5px';
        newDiv.style.padding = '10px';
        console.log(newDiv.style.backgroundColor);
        console.log(`the length of dicebox is ${dicebox.length}`);
        /*took below line from AI. */
        createDivs(randomNumber, newDiv);
        while (dicebox[0].childNodes.length > 0) {
            dicebox[0].removeChild(dicebox[0].lastChild);
        }
        dicebox[0].appendChild(newDiv);
    }
    function createDivs(randomNumber, newDiv) {
        for (let i = 0; i < randomNumber; ++i) {
            let newDivs = document.createElement('div');
            newDivs.style.width = '20px';
            newDivs.style.height = '20px';
            newDivs.textContent = '*';
            newDivs.style.fontSize = '3em';
            newDiv.appendChild(newDivs);
        }
    }
});