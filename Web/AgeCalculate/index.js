const buttonEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
    if(birthdayEl.value === "")
    {
        alert("Please input your birthday!");
    }
    else
    {
        const birthdayValue = birthdayEl.value;
        const age = getAge(birthdayValue); 
        resultEl.innerText= `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    
    age = currentDate.getFullYear() - birthdayDate.getFullYear();
    month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month===0 && currentDate.getDay() < birthdayDate.getDay()))
        age--;

    return age;
}

buttonEl.addEventListener("click", calculateAge);