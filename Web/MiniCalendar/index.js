const monthEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();

monthEl.innerText = date.toLocaleString("en", {month: "long"});
dayNameEl.innerText = date.toLocaleString("en",{ weekday: "long"});
dayNumberEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();