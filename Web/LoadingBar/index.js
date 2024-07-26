const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");

let index = 0;
let up = true;

function updateNum() {
    counterEl.innerText = index + "%";
    barEl.style.width = index + "%";
    if(index === 100)
        up = false;
    else if(index === 0)
        up = true;

    if(up)
        index++;
    else
        index--;
}

setInterval(updateNum, 100);