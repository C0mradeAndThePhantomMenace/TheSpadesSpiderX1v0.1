// scriptClock.js

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros if numbers are less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}
let timeLeft = 11; // Initial countdown time in seconds

function updateCountdown() {
    const countdownDisplay = document.getElementById('countdown');
    countdownDisplay.textContent = timeLeft - 1;

    if (timeLeft <= 1) {
        // clearInterval(timerInterval);
        countdownDisplay.textContent = "Time's up!";
        // console.log("if", timeLeft )
    }
    timeLeft--;
    // console.log("ifN",timeLeft )

}


let timeCounter = 0; // Initial countdown time in seconds

function updateCounter() {
    const countdownDisplay = document.getElementById('counter');
    countdownDisplay.textContent = timeCounter;

    timeCounter++;
}

var a = function () { console.log("this is function: a") }
var b = function () { console.log("this is function: b") }
var c = function () { console.log("this is function: c") }

var foo = [a, b, c];
function ArrFuc() {
    // while (foo.length) { foo.shift().call(); }

    for (i = 0; i < foo.length; i++) { foo[i](); }
    foo.pop();

}
// Update the countdown every second
// const timerInterval = setInterval(updateCountdown, 1000);

// Update the clock every second
// setInterval(updateClock, 1000);

function executeAllFunctions() {
    updateClock();
    updateCounter();
    timeLeft && updateCountdown();
    // console.log("i",timeLeft )
    ArrFuc()
}

setInterval(executeAllFunctions, 1000);

// Initial call to display the counter immediately
updateCounter();
// Initial call to display the countdown immediately
updateCountdown();
// Initial call to display the time immediately
updateClock();

console.log("App 1")

