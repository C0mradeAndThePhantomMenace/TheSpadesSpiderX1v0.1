// script.js

console.log(`script.js >> Have a nice day!`)

async function load_home() {
    var content = document.getElementById("Clock");
    // content.innerHTML = await (await fetch('../src-html/Clock/Clock.html')).text().catch((error) => { console.log(error) });
    let ht = await (await fetch('/TheSpadesSpiderX1/TimeApp5/src-html/Clock/Clock.html')).text()
    console.log(ht)
    content.innerHTML= ht
}

load_home()
