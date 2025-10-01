let timeLeft = 10; // Initial countdown time in seconds

function updateCountdown() {
    const countdownDisplay = document.getElementById('countdown');
    countdownDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        countdownDisplay.textContent = "Time's up!";
    }
    timeLeft--;
}

// Update the countdown every second
const timerInterval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();