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
let timeLeft = 10; // Initial countdown time in seconds

function updateCountdown() {
    const countdownDisplay = document.getElementById('countdown');
    countdownDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
        // clearInterval(timerInterval);
        countdownDisplay.textContent = "Time's up!";
    }
    timeLeft--;
}


let timeCounter = 0; // Initial countdown time in seconds

function updateCounter() {
    const countdownDisplay = document.getElementById('counter');
    countdownDisplay.textContent = timeCounter;

    timeCounter++;
}

// Update the countdown every second
// const timerInterval = setInterval(updateCountdown, 1000);

// Update the clock every second
// setInterval(updateClock, 1000);

function executeAllFunctions() {
    updateClock();
    updateCounter();
    timeLeft & updateCountdown();
}

setInterval(executeAllFunctions, 1000);

// Initial call to display the counter immediately
updateCounter();
// Initial call to display the countdown immediately
updateCountdown();
// Initial call to display the time immediately
updateClock();