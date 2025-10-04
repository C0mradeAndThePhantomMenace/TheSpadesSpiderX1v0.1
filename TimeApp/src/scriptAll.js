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
let runUpdateCountDown = false

let timeLeft = 10; // Initial countdown time in seconds

function updateCountDown() {
    const countdownDisplay = document.getElementById('countDown');
    countdownDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
        // clearInterval(timerInterval);
        countdownDisplay.textContent = "Time's up!";
        runUpdateCountDown = false
        // console.log("if", timeLeft )
    }
    timeLeft--;
    console.log("ifN", timeLeft)

}

let timeCounter = 0; // Initial countdown time in seconds

function updateCounterUp() {
    const countdownDisplay = document.getElementById('counterUp');
    countdownDisplay.textContent = timeCounter;
    timeCounter++;
}

document.getElementById("countDownStart").addEventListener("click", countDownStartHandler);
function countDownStartHandler() {
    (timeLeft <= 0)  && (timeLeft = 10)
    runUpdateCountDown = true

}

document.getElementById("countDownReset").addEventListener("click", countDownResetHandler);
function countDownResetHandler() {
    timeLeft = 10
    runUpdateCountDown = true
    updateCountDown();
    console.log("YOU CLICKED ME!", timeLeft, runUpdateCountDown);

}

document.getElementById("countDownStop").addEventListener("click", countDownStopHandler);
function countDownStopHandler() { runUpdateCountDown = false }

// Update the countdown every second
// const timerInterval = setInterval(updateCountDown, 1000);

// Update the clock every second
// setInterval(updateClock, 1000);

function executeAllFunctions() {
    updateClock();
    updateCounterUp();
    runUpdateCountDown && updateCountDown();
    // console.log("i",timeLeft )
}

setInterval(executeAllFunctions, 1000);

// Initial call to display the counter immediately
updateCounterUp();
// Initial call to display the countdown immediately
updateCountDown();
// Initial call to display the time immediately
updateClock();

console.log("App 1")


// *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***

// var a = function () { console.log("this is function: a") }
// var b = function () { console.log("this is function: b") }
// var c = function () { console.log("this is function: c") }

// var foo = [a, b, c];
// function ArrFuc() {
//     // while (foo.length) { foo.shift().call(); }

//     for (i = 0; i < foo.length; i++) { foo[i](); }
//     foo.pop();
// }
// ArrFuc()
