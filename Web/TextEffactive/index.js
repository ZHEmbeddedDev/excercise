const containerEl = document.querySelector(".container");
const carrers = ["Engineer", "Teacher", "Programmer", "Driver"];

let carrerIndex = 0;
let carIndex = 0;

updateText();

function updateText() {
    carIndex++;
    containerEl.innerHTML=
    `<h1>I am ${carrers[carrerIndex].slice(0,1) === "E" ? "AN" : "A"} ${carrers[carrerIndex].slice(0, carIndex)}</h1>`;
    if(carIndex === carrers[carrerIndex].length)
    {
        carrerIndex++;
        carIndex = 0;
    }
    
    if(carrerIndex === carrers.length)
        carrerIndex = 0;
    setTimeout(updateText, 400);
}
