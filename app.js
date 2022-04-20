// Variables
let days = document.getElementById("daily").value; // Amount of days
const labor = document.getElementById('LA');
const afterHours = document.getElementById('AH');
const calc = document.getElementById('calculate'); // calc button
const topDisp = document.getElementById('top');
// const bottomDisp = document.getElementById('bottom');


// Calculate Fee's
function dailyCalc() {
    let display = document.getElementById('bottom');
    
    const day = 61.60; // $61.60 is one day of storage, 56 + 10% city tax (5.60)
    const tow = 185; // $185 is the standard tow fee

    let daily = days * day + tow; // daily = $185 + 61.60 * however many days stored
    display.innerHTML = daily;

    return daily
    

}
console.log(days);
console.log(dailyCalc())

// Caluclate Function



labor.onclick = function () {
    let lfee = 92.50;
    console.log('92.50');
}

afterHours.onclick = function () {
    let ahfee = 92.50;
    console.log('92.50');
}


