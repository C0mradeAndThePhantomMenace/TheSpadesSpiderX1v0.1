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

let runUpdateCountUp = true

let countUpCounter = 0; // Initial countdown time in seconds
function updateCountUp() {
    const countdownDisplay = document.getElementById('counterUp');
    countdownDisplay.textContent = countUpCounter;
    countUpCounter++;
    if (countUpCounter <10) runUpdateCountUp = false
    //     if (countUpCounter <11) {
    //     const countdownDisplay = document.getElementById('counterUp');
    //     countdownDisplay.textContent = countUpCounter;
    //     countUpCounter++;

    // }

}

let runUpdateCountDown = false
let countDownCounter = 10; // Initial countdown time in seconds
function updateCountDown() {
    const countdownDisplay = document.getElementById('countDown');
    countdownDisplay.textContent = countDownCounter;

    if (countDownCounter <= 0) {
        // clearInterval(timerInterval);
        countdownDisplay.textContent = "Time's up!";
        runUpdateCountDown = false
        // console.log("if", countDownCounter )
    }
    countDownCounter--;
    console.log("ifN", countDownCounter)

}

document.getElementById("countDownStart").addEventListener("click", countDownStartHandler);
function countDownStartHandler() {
    (countDownCounter <= 0) && (countDownCounter = 10)
    runUpdateCountDown = true

}

document.getElementById("countDownReset").addEventListener("click", countDownResetHandler);
function countDownResetHandler() {
    countDownCounter = 10
    runUpdateCountDown = true
    updateCountDown();
    console.log("YOU CLICKED ME!", countDownCounter, runUpdateCountDown);

}

document.getElementById("countDownStop").addEventListener("click", countDownStopHandler);
function countDownStopHandler() { runUpdateCountDown = false }

// Update the countdown every second
// const timerInterval = setInterval(updateCountDown, 1000);

// Update the clock every second
// setInterval(updateClock, 1000);

function executeAllFunctions() {
    updateClock();
    runUpdateCountUp && updateCountUp();
    runUpdateCountDown && updateCountDown();
    // console.log("i",countDownCounter )
}

setInterval(executeAllFunctions, 1000);

// Initial call to display the counter immediately
updateCountUp();
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
