let button = document.getElementById("calculate-age")
let inputvalue = document.getElementById("input-here")
let anspara = document.getElementById("get-age")
let date = new Date()
console.log(date)
let dateformatted = date.toDateString()
console.log(dateformatted)
let year = date.getFullYear()
let month = date.getMonth() + 1
//months are 0-based indexed
let day = date.getDate()
console.log(`year is ${year} month is ${month} and day is ${day}`)




//Function to calculate date
function calculateAge(dateentered: Date) {
    const timeNow: Date = new Date();
    const timeNowYear: number = timeNow.getFullYear();
    const timeNowMonth: number = timeNow.getMonth();
    const timeNowDay: number = timeNow.getDate();
    // To complete the function `calculateAge`, you need to calculate the difference between the current date and the entered date. Here are some hints:

    // 1. Extract the year, month, and day from the `dateentered` parameter.
    let yearEntered = dateentered.getFullYear();
    let monthEntered = dateentered.getMonth();
    let dateEntered = dateentered.getDate();
    let differenceinYear = timeNowYear - yearEntered;
    let differenceinMonth = timeNowMonth - monthEntered;
    let differenceinDate = timeNowDay - dateEntered;
    if (differenceinMonth < 0 || (differenceinMonth === 0 && differenceinDate < 0)) {
        differenceinYear--;
        differenceinMonth += 12;
    }
    if (differenceinDate < 0) {
        differenceinMonth--;
        differenceinDate += new Date(timeNowYear, timeNowMonth, 0).getDate();
    }
    return {
        years: differenceinYear,
        months: differenceinMonth,
        days: differenceinDate
    };
    // 2. Calculate the difference in years, months, and days between the current date and the entered date.
    // 3. Adjust the calculation if the current month and day are before the entered month and day.

    // For the event listener, you need to:
    // 1. Parse the input date string into a `Date` object.
    // 2. Call the `calculateAge` function with the parsed date.
    // 3. Display the calculated age in the `anspara` element.
}







button?.addEventListener("click", () => {
    let inputvalue = document.getElementById("input-here")
    let anspara = document.getElementById("get-age")
    let dateentered = (inputvalue as HTMLInputElement)?.value
    //first type cast and then use it.
    if (dateentered) {
        const parsedDate = new Date(dateentered);
        if (!isNaN(parsedDate.getTime())) {
            const age = calculateAge(parsedDate);
            (anspara as HTMLParagraphElement).innerText = `Age: ${age.years} years, ${age.months} months, and ${age.days} days`;
        } else {
            (anspara as HTMLParagraphElement).innerText = "Invalid date format";
        }
    }
    else {
        console.log(`please select the date`);
        (anspara as HTMLParagraphElement).innerText = "Please Select the date";
    }
})
