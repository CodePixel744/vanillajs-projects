let count = 0; // Initialize count variable

document.addEventListener("DOMContentLoaded", function () {
    let incbutton = document.getElementById("increment");
    let decbutton = document.getElementById("decrement");
    let para = document.getElementById("para");
    let savebutton = document.getElementById("save");

    function updateParagraph() {
        para.textContent = `COUNT IS ${count}`;
    }

    function increment() {
        count++;
        updateParagraph();
    }

    function decrement() {
        count--;
        updateParagraph();
    }
    function save() {
        let para1 = document.getElementById("para1");
        para1.textContent = '0';
        para1.textContent += `-${count}`;
    }
    // Attach functions to buttons
    incbutton.onclick = increment;
    decbutton.onclick = decrement;
    savebutton.onclick = save;
    // Initialize paragraph text when the page loads
    updateParagraph();
});