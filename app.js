// Variables
const topDisp = document.getElementById('top');
const bttmDisp = document.getElementById('bottom');

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

    let top = topDisp.innerHTML; 
    let bttom = bttmDisp.innerHTML; 

    bttmDisp.innerHTML = +main + +top; 
    console.log('click');
    console.log(bttom)
}

function reset() {
    let days = document.getElementById("daily").value; // Amount of days

    bttmDisp.innerHTML = ''; 
    topDisp.innerHTML = '';
    console.log('refresh');
}

function afterHour() {
    let AH = 92.50
    topDisp.innerHTML = AH;
    
    console.log('afterhours');
}



