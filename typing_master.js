let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");

let counterEl = document.getElementById("timer");
let userInputEl = document.getElementById("quoteInput");

let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");

let timerEl = document.getElementById("timer");
let counter = 0;

function counterTimer() {
    counter = counter + 1;
    counterEl.textContent = counter + "seconds";
    //let counterValue=counterEl.textContent;
    timerEl.appendChild(counterEl);
}
let intervalId = setInterval(counterTimer, 1000);


function reset() {
    clearInterval(intervalId);
    counterEl.textContent = 0 + "seconds";
}

function validate() {
    let enteredText = userInputEl.value;
    let quoteText = quoteDisplayEl.textContent;
    console.log(enteredText);
    console.log(quoteText);
    let matched = "You typed in" + counter + "seconds";
    let unmatched = "you typed incorrect";
    if (quoteText === enteredText) {
        resultEl.textContent = matched;
        clearInterval(intervalId);
    } else {
        resultEl.textContent = unmatched;

    }
}

let url = "https://apis.ccbp.in/random-quote";
let option = {
    method: "GET"
};
spinnerEl.classList.remove("d-none");
fetch(url, option)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        spinnerEl.classList.add("d-none");
        let quote = jsonData.content;
        quoteDisplayEl.textContent = quote;
        console.log(jsonData.content);
    });

resetBtnEl.addEventListener("click", reset);
submitBtnEl.addEventListener("click", validate);