let startTime;
let elapsedTime = 0;
let timerInterval;
let lapCounter = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const lapResetBtn = document.getElementById('lapResetBtn');
const lapsList = document.getElementById('laps');

function formatTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor(ms % 1000);

    return (
        `${String(hours).padStart(2, '0')}:` +
        `${String(minutes).padStart(2, '0')}:` +
        `${String(seconds).padStart(2, '0')}.` +
        `${String(milliseconds).padStart(3, '0')}`
    );
}

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.textContent = formatTime(elapsedTime);
    }, 10); // Update every 10ms for smoother display
    startStopBtn.textContent = 'Stop';
    lapResetBtn.textContent = 'Lap';
}

function stopStopwatch() {
    clearInterval(timerInterval);
    startStopBtn.textContent = 'Start';
    lapResetBtn.textContent = 'Reset';
}

function recordLap() {
    lapCounter++;
    const lapTime = elapsedTime;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCounter}: ${formatTime(lapTime)}`;
    lapsList.appendChild(lapItem);
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    lapCounter = 0;
    display.textContent = '00:00:00.000';
    lapsList.innerHTML = ''; // Clear lap list
    startStopBtn.textContent = 'Start';
    lapResetBtn.textContent = 'Lap';
}

startStopBtn.addEventListener('click', () => {
    if (startStopBtn.textContent === 'Start') {
        startStopwatch();
    } else {
        stopStopwatch();
    }
});

lapResetBtn.addEventListener('click', () => {
    if (lapResetBtn.textContent === 'Lap') {
        recordLap();
    } else {
        resetStopwatch();
    }
});