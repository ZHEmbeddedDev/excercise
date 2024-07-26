const diceFace = [ `&#9856`, `&#9857`, `&#9858`, `&#9859`, `&#9860`, `&#9861`];
const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");
let rollNum = 1;

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6);
    diceEl.innerHTML = diceFace[rollResult];
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${rollNum}: <span>${diceFace[rollResult]}</span>`
    rollHistoryEl.appendChild(listItem);
}

buttonEl.addEventListener("click", ()=>{
    diceEl.classList.add("roll-animation");
    setTimeout(()=>{
        diceEl.classList.remove("roll-animation");
        rollDice();
        rollNum++;
    }, 1000);
})