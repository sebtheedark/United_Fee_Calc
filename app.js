// Variables
const topDisp = document.getElementById('top');
const bttmDisp = document.getElementById('bottom');
const lDisp = document.getElementById('left');
const rDisp = document.getElementById('right')

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
    let main = dailyCalc();
    let top = topDisp.innerHTML; // Displays input from Labor, After Hours, Lien on top disp
    let rbtm = rDisp.innerHTML; // Displays calculated totals to the bottom
    let rtotal = +top + +rbtm; // Totals the total of whatever is on top + bottom
    let ;

    rDisp.innerHTML = rtotal; // Calculates & displays total from main func & top disp
    topDisp.innerHTML = ''; // resets top disp values
    
    let bttm = r.innerHTML; // displays value in console
    console.log(bttm)

    console.log('sum');
}

function labor() {
    let LA = 92.50; 
    topDisp.innerHTML = LA; 
    console.log('labor');
}

function afterHour() {
    let AH = 92.50
    topDisp.innerHTML = AH;
    console.log('afterhours');
}

function seventy() {
    let sev = 70
    topDisp.innerHTML = sev; 
    console.log('$seventy');
}
function hundered() {
    let hun = 100 
    topDisp.innerHTML = hun; 
    console.log('$hundered')
}

// Resets all paramenters
function reset() { 
    document.getElementById("daily").value = ''; // Amount of days
    bttmDisp.innerHTML = ''; 
    topDisp.innerHTML = '';
    console.log('refresh');
}
