const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const btnEl = document.getElementById("btn");
const bmiEl = document.getElementById("bmi-result");

const weightConditionEl = document.getElementById("weight-condition");

btnEl.addEventListener("click", calculate);

function calculate() {
    const height = heightEl.value / 100;
    const weight = weightEl.value;

    const bmi = weight / (height *height);

    bmiEl.value = bmi;

    if(bmi < 18.5)
    {
        weightConditionEl.innerText = "Under weight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9)
    {
        weightConditionEl.innerText = "Normal weight";
    }
    else if(bmi > 25 && bmi <= 29.9)
    {
        weightConditionEl.innerText = "Over weight";
    }
    else if(bmi > 30)
        weightConditionEl.innerText = "Obesity";

}