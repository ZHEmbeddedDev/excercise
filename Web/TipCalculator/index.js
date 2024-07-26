const buttonEl = document.getElementById("calculate");
const billEl = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const totalEl = document.getElementById("total");

function calculateTotal() {
    const bill = +billEl.value;
    const tip = +tipEl.value;
    const total = bill + (bill * tip) / 100;
    
    totalEl.innerText = total.toFixed(2); 
}
buttonEl.addEventListener("click", calculateTotal);