import {calculator} from "./function.js";

const form = document.querySelector("#form-container");
const firstInput = document.querySelector("#first-input");
const secundInput = document.querySelector("#secund-input");
const result = document.querySelector("#result");

form.addEventListener("click", (event) => {

    event.preventDefault();
    const targetButton = event.target.id;
    const firstInputValue = Number(firstInput.value);
    const secundInputValue = Number(secundInput.value);

    const calculateValues = calculator(firstInputValue, secundInputValue, targetButton);

    result.innerText = calculateValues;
});