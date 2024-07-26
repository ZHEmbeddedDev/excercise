const btnEl = document.querySelector(".btn");
const closeEl = document.querySelector(".close-icon");
const trailerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", ()=>{
    trailerEl.classList.remove("active");
})

closeEl.addEventListener("click", ()=>{
    trailerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
})