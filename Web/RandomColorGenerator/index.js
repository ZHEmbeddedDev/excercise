const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    
    containerEl.appendChild(colorContainerEl)
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColor();

function generateColor(){
    colorContainerEls.forEach((colorContainerEl)=>{
        const colorCode = randomColor();
        colorContainerEl.style.backgroundColor = colorCode;
        colorContainerEl.innerHTML = colorCode;
    })
}
function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "#";

    for (let index = 0; index < colorCodeLength; index++) {
        const randomNumb = Math.floor(Math.random()*chars.length);
        colorCode += chars.substring(randomNumb, randomNumb +1);
        
    }
    return colorCode;
}