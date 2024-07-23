const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () =>{
    imageNumber = 10;
    addNewPhoto();
});

function addNewPhoto() {
    for(let index = 0; index < imageNumber; index++)
    {
        const newPhotoEl = document.createElement("img");
        newPhotoEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
        imageContainerEl.appendChild(newPhotoEl);
    }
}