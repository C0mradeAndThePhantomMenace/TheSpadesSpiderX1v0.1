// 

const updateClockHandler = () => {
    const now = new Date()
    let hh = now.getHours()
    let mm = now.getMinutes()
    let ss = now.getSeconds()
    hh = hh < 10 ? '0' + hh : hh;
    mm = mm < 10 ? '0' + mm : mm;
    ss = ss < 10 ? '0' + ss : ss;
    const timeString = `${hh}:${mm}:${ss}`;
    document.getElementById('clock').textContent = timeString;
}

console.log("Test 3")
updateClockHandler();

setInterval(updateClockHandler, 1000);