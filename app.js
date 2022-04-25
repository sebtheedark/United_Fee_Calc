// Variables
const labor = document.getElementById('LA');
const afterHours = document.getElementById('AH');

const topDisp = document.getElementById('top');
const display = document.getElementById('bottom');

// Calculate Fee's
function dailyCalc() {
    let days = document.getElementById("daily").value; // Amount of days
    const day = 61.60; // $61.60 is one day of storage, 56 + 10% city tax (5.60)
    const tow = 185; // $185 is the standard tow fee
    
    let daily = days * day + tow; // daily = $185 + 61.60 * however many days stored
    console.log(days);
    console.log(daily);

    return daily;
}

// Caluclate Function
function calculate() {
    display.innerHTML = dailyCalc();
    console.log('click');
}

function reset() {
    let days = document.getElementById("daily").value; // Amount of days
    
    days.value = '';
    display.innerHTML = ''; 
    console.log('refresh');
}




