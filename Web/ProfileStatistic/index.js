const counterEls = document.querySelectorAll(".counter");

counterEls.forEach((counterEl)=>{
    counterEl.innerText = "0";

    increasCounter();

    function increasCounter() {
        let currentCounter = +counterEl.innerText;
        const dataCeil = counterEl.getAttribute("data-ceil");
        const step = dataCeil / 15;

        currentCounter = Math.ceil(currentCounter + step);
        if(currentCounter < dataCeil)
        {
            counterEl.innerText = currentCounter;
            setTimeout(increasCounter, 100);
        }
        else
        {
            counterEl.innerText = dataCeil;            
        }
    }
})