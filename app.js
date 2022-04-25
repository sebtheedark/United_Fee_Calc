// Variables
let days = document.getElementById("daily").value; // Amount of days
const labor = document.getElementById('LA');
const afterHours = document.getElementById('AH');
const topDisp = document.getElementById('top');
const display = document.getElementById('bottom');

// Calculate Fee's
function dailyCalc() {
    const day = 61.60; // $61.60 is one day of storage, 56 + 10% city tax (5.60)
    const tow = 185; // $185 is the standard tow fee
    
    let daily = days * day + tow; // daily = $185 + 61.60 * however many days stored

    return daily; 
    
}
console.log(days);
console.log(dailyCalc())

// Caluclate Function
function calculate() {
    display.innerHTML = dailyCalc();
    console.log('click');
}

function reset() {
    location.reload();
    console.log('refresh');
    
}




